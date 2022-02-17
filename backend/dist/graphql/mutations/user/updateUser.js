"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../../models/User"));
exports.default = async (_, { id, input }) => {
    return await User_1.default.findOneAndUpdate({ _id: id }, input, { new: true });
};
