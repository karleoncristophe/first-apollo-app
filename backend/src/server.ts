import { ApolloServer } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import http from "http";
import dontenv from "dotenv";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import mongoose from "./lib/Mongoose";
import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import Queue from "./lib/Queue";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import authenticate from "./middlewares/authenticate";
require("dotenv").config();
dontenv.config();

const PORT = process.env.PORT;

export const pubsub = new PubSub();

(async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: "/graphql",
    }
  );

  const server = new ApolloServer({
    schema,
    context: { pubsub },
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
  const serverAdapter = new ExpressAdapter();
  const BULL_BOARD = createBullBoard({
    queues: Queue.queues.map((q) => new BullAdapter(q.bull)),
    serverAdapter,
  });

  serverAdapter.setBasePath("/admin/queues");
  app.use("/admin/queues", serverAdapter.getRouter());
  // END BULL

  await server.start();

  server.applyMiddleware({ app });

  app.use("/graphql", authenticate, express.json());

  await mongoose;

  await new Promise<void>((resolve) =>
    httpServer.listen(
      {
        port: PORT,
      },
      resolve
    )
  );

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(`🚀 Bull ready at http://localhost:${PORT}/admin/queues`);
})();
