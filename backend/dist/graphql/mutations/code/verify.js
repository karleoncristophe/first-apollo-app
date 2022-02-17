"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Code_1 = __importDefault(require("../../../models/Code"));
exports.default = async (_, { code }) => {
    const data = await Code_1.default.findOne({ code });
    return data;
};
