"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
exports.default = {
    REGISTRATION_MAIL: `REGISTRATION_MAIL_${process.env.ENV}`,
    FORGOT_PASSWORD: `FORGOT_PASSWORD_${process.env.ENV}`,
};
