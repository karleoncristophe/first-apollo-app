"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const smtp_1 = __importDefault(require("./smtp"));
const transport = nodemailer_1.default.createTransport({
    host: smtp_1.default.host,
    port: smtp_1.default.port,
    secure: false,
    auth: {
        user: smtp_1.default.user,
        pass: smtp_1.default.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});
exports.default = transport;
