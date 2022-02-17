"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const password = process.env.PASSWORD;
const email = process.env.EMAIL;
const emailhost = process.env.EMAIL_HOST;
const emailport = Number(process.env.EMAIL_PORT);
exports.default = {
    host: emailhost,
    port: emailport,
    user: email,
    pass: password,
};
