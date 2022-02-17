"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB = process.env.DB;
const configDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const Connect = async () => {
    try {
        const db = await mongoose_1.default.connect(DB, configDB);
        console.log("Mongodb is connected!");
        return db;
    }
    catch (e) {
        console.log(e);
    }
};
Connect();
exports.default = mongoose_1.default;
