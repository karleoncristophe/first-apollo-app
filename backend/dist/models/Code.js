"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose_1 = __importDefault(require("../lib/Mongoose"));
const Schema = Mongoose_1.default.Schema;
const CodeSchema = new Mongoose_1.default.Schema({
    code: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const CodeModel = Mongoose_1.default.model("Code", CodeSchema);
exports.default = CodeModel;
