"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const APPKEY = process.env.APPKEY;
const authenticate = (req, res, next) => {
    const header = req.headers.authorization;
    if (header) {
        const token = header.replace("Bearer ", "");
        try {
            const decoded = jsonwebtoken_1.default.verify(token, APPKEY);
            req.logged = decoded.id;
            return next();
        }
        catch (e) {
            next(res.status(401).send({ error: "Access denied." }));
        }
    }
    next();
};
exports.default = authenticate;
