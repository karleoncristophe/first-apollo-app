"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const APPKEY = process.env.APPKEY;
const generateToken = (params) => {
    return jsonwebtoken_1.default.sign(params, APPKEY, {
        expiresIn: "1d",
    });
};
exports.default = generateToken;
