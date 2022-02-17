"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = __importDefault(require("./user/createUser"));
const updateUser_1 = __importDefault(require("./user/updateUser"));
const deleteUser_1 = __importDefault(require("./user/deleteUser"));
const logInUser_1 = __importDefault(require("./user/logInUser"));
const createPost_1 = __importDefault(require("./post/createPost"));
const deletePost_1 = __importDefault(require("./post/deletePost"));
const updatePost_1 = __importDefault(require("./post/updatePost"));
const createCode_1 = __importDefault(require("./code/createCode"));
const updatePassword_1 = __importDefault(require("./code/updatePassword"));
const verify_1 = __importDefault(require("./code/verify"));
exports.default = {
    createUser: createUser_1.default,
    deleteUser: deleteUser_1.default,
    updateUser: updateUser_1.default,
    logInUser: logInUser_1.default,
    createPost: createPost_1.default,
    deletePost: deletePost_1.default,
    updatePost: updatePost_1.default,
    createCode: createCode_1.default,
    updatePassword: updatePassword_1.default,
    verify: verify_1.default,
};
