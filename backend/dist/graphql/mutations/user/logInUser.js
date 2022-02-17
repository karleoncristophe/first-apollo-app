"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateToken_1 = __importDefault(require("../../../common/generateToken"));
const apollo_server_1 = require("apollo-server");
const User_1 = __importDefault(require("../../../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.default = async (_, { input: { email, password } }) => {
    const user = await User_1.default.findOne({ email }).select("+password");
    if (!user) {
        throw new apollo_server_1.UserInputError("User not registered.");
    }
    const match = await bcryptjs_1.default.compare(password, user.password);
    if (!match) {
        throw new apollo_server_1.UserInputError("Invalid password.");
    }
    const token = (0, generateToken_1.default)({ id: user.id });
    if (!match) {
        throw new apollo_server_1.UserInputError("Sem token.");
    }
    delete user.password;
    return { token, user };
};
