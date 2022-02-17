"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const transport_1 = __importDefault(require("../config/transport"));
const MAIL_JOBS_1 = __importDefault(require("../constants/MAIL_JOBS"));
const email = process.env.EMAIL;
exports.default = {
    key: MAIL_JOBS_1.default.FORGOT_PASSWORD,
    options: {},
    async handle({ data }) {
        const { user } = data;
        const code = data;
        await transport_1.default.sendMail({
            text: "Redefinição de senha",
            subject: "Redefinição de senha",
            from: `Form Company < ${email} >`,
            to: user.email,
            html: `<center><h3>Redefinição de senha</h3><div><p>Seu código é ${code.code}</p><a href=" http://192.168.0.107:3000/sendCode">Acesse este link para redefinir sua senha</a></div><center>`,
        });
    },
};
