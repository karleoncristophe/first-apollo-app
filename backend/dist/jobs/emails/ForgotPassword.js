"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const transport_1 = __importDefault(require("../../config/transport"));
const MAIL_JOBS_1 = __importDefault(require("../../constants/MAIL_JOBS"));
dotenv_1.default.config();
const email = process.env.EMAIL;
exports.default = {
    key: MAIL_JOBS_1.default.FORGOT_PASSWORD,
    options: {},
    async handle({ data }) {
        const { user } = data;
        await transport_1.default.sendMail({
            text: "Redefinição de senha",
            subject: "Redefinição de senha",
            from: `Form Company < ${email} >`,
            to: user.email,
            html: `<center><h3>Redefinição de senha</h3><div><a href="http://localhost:3000/recoverPassword">Acesse este link para redefinir sua senha<a/><div/><center>`,
        });
    },
};
