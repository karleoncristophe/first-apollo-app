"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Code_1 = __importDefault(require("../../../models/Code"));
exports.default = async () => {
    return await Code_1.default.find({}).populate("user");
};
