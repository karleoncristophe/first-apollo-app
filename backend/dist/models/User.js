"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose_1 = __importDefault(require("../lib/Mongoose"));
const UserSchema = new Mongoose_1.default.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const UserModel = Mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
