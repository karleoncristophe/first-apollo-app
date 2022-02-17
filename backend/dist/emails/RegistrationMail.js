"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const transport_1 = __importDefault(require("../config/transport"));
const MAIL_JOBS_1 = __importDefault(require("../constants/MAIL_JOBS"));
dotenv_1.default.config();
const email = process.env.EMAIL;
exports.default = {
    key: MAIL_JOBS_1.default.REGISTRATION_MAIL,
    options: {},
    async handle({ data }) {
        const { user } = data;
        await transport_1.default.sendMail({
            text: "Test",
            subject: "Sending Email",
            from: `Karleon Cristophe < ${email} >`,
            to: user.email,
            html: `<h3>Hello World!</h3>`,
        });
    },
};
