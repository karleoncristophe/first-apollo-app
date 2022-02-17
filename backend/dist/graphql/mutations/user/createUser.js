"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../../../models/User"));
exports.default = async (_, { input }) => {
    const { name, email, password } = input;
    if (await User_1.default.findOne({ email })) {
        console.log("email já cadastrado");
    }
    try {
        const hash = await bcryptjs_1.default.hash(password, 10);
        const user = await User_1.default.create({
            name,
            email,
            password: hash,
        });
        // pubsub.publish(USER_ADDED, user);
        // Queue.add(MAIL_JOBS.REGISTRATION_MAIL, { user });
        return user;
    }
    catch (e) {
        console.log("erro");
    }
};
