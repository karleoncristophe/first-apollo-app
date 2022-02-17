"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubsub = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const graphql_1 = require("graphql");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const schema_1 = require("@graphql-tools/schema");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const Mongoose_1 = __importDefault(require("./lib/Mongoose"));
const api_1 = require("@bull-board/api");
const express_2 = require("@bull-board/express");
const Queue_1 = __importDefault(require("./lib/Queue"));
const bullAdapter_1 = require("@bull-board/api/bullAdapter");
const authenticate_1 = __importDefault(require("./middlewares/authenticate"));
require("dotenv").config();
dotenv_1.default.config();
const PORT = process.env.PORT;
exports.pubsub = new graphql_subscriptions_1.PubSub();
(async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const schema = (0, schema_1.makeExecutableSchema)({
        typeDefs: typeDefs_1.default,
        resolvers: resolvers_1.default,
    });
    const subscriptionServer = subscriptions_transport_ws_1.SubscriptionServer.create({
        schema,
        execute: graphql_1.execute,
        subscribe: graphql_1.subscribe,
    }, {
        server: httpServer,
        path: "/graphql",
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: { pubsub: exports.pubsub },
        plugins: [
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            subscriptionServer.close();
                        },
                    };
                },
            },
        ],
    });
    // BULL
    const serverAdapter = new express_2.ExpressAdapter();
    const BULL_BOARD = (0, api_1.createBullBoard)({
        queues: Queue_1.default.queues.map((q) => new bullAdapter_1.BullAdapter(q.bull)),
        serverAdapter,
    });
    serverAdapter.setBasePath("/admin/queues");
    app.use("/admin/queues", serverAdapter.getRouter());
    // END BULL
    await server.start();
    server.applyMiddleware({ app });
    app.use("/graphql", authenticate_1.default, express_1.default.json());
    await Mongoose_1.default;
    await new Promise((resolve) => httpServer.listen({
        port: PORT,
    }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`🚀 Bull ready at http://localhost:${PORT}/admin/queues`);
})();
