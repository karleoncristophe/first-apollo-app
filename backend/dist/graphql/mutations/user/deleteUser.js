"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../../models/User"));
exports.default = async (_, { id }) => {
    const deleted = await User_1.default.findByIdAndDelete({ _id: id });
    return !!deleted;
};
