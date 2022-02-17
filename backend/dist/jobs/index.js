"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassword = exports.RegistrationMail = void 0;
const RegistrationMail_1 = __importDefault(require("../emails/RegistrationMail"));
exports.RegistrationMail = RegistrationMail_1.default;
const ForgotPassword_1 = __importDefault(require("../emails/ForgotPassword"));
exports.ForgotPassword = ForgotPassword_1.default;
