"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const Code_1 = __importDefault(require("../../../models/Code"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../../../models/User"));
exports.default = async (_, { input }) => {
    const { password, user, code } = input;
    const hash = await bcryptjs_1.default.hash(password, 10);
    const data = await Code_1.default.findOne({ code });
    if (data.code !== code) {
        throw new apollo_server_1.UserInputError("Invalid Code.");
    }
    data.password = hash;
    await User_1.default.findOneAndUpdate({ id: user }, { password: hash }, { new: true }).select("+password");
    return data;
};
