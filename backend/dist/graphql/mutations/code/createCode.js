"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./../../../models/User"));
const apollo_server_1 = require("apollo-server");
const MAIL_JOBS_1 = __importDefault(require("../../../constants/MAIL_JOBS"));
const Queue_1 = __importDefault(require("../../../lib/Queue"));
const Code_1 = __importDefault(require("../../../models/Code"));
exports.default = async (_, min, max, input) => {
    const email = await User_1.default.findOne({ input });
    if (!email) {
        throw new apollo_server_1.UserInputError("User not found.");
    }
    min = Math.ceil(111111);
    max = Math.floor(999999);
    const code = Math.floor(Math.random() * (max - min)) + min;
    const getRandomInt = async () => {
        return code;
    };
    function generate(codes) {
        const newCode = getRandomInt();
        if (codes.includes(newCode))
            generate(codes);
        return newCode;
    }
    const user = await Code_1.default.create({ user: email, code });
    Queue_1.default.add(MAIL_JOBS_1.default.FORGOT_PASSWORD, user);
    return user;
};
