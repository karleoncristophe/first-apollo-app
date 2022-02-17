"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mutations_1 = __importDefault(require("./mutations"));
const queries_1 = __importDefault(require("./queries"));
const subscriptions_1 = __importDefault(require("./subscriptions"));
exports.default = {
    Mutation: mutations_1.default,
    Query: queries_1.default,
    Subscription: subscriptions_1.default,
};
