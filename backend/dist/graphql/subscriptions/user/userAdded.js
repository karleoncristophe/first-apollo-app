"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../../server");
const channels_1 = require("./channels");
const userAdded = async (obj, args) => {
    console.log(JSON.stringify(server_1.pubsub));
    return server_1.pubsub.asyncIterator(channels_1.USER_ADDED);
};
const link = {
    subscribe: userAdded,
    resolve: (payload) => {
        return payload;
    },
};
exports.default = link;
