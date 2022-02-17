"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./user/users"));
const user_1 = __importDefault(require("./user/user"));
const post_1 = __importDefault(require("./post/post"));
const posts_1 = __importDefault(require("./post/posts"));
const codes_1 = __importDefault(require("./code/codes"));
const code_1 = __importDefault(require("./code/code"));
exports.default = {
    users: users_1.default,
    user: user_1.default,
    posts: posts_1.default,
    post: post_1.default,
    codes: codes_1.default,
    code: code_1.default,
};
