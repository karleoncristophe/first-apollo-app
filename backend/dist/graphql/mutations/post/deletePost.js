"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../../../models/Post"));
exports.default = async (_, { id }) => {
    const deleted = await Post_1.default.findOneAndDelete({ _id: id });
    return !!deleted;
};
