"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose_1 = __importDefault(require("../lib/Mongoose"));
const Schema = Mongoose_1.default.Schema;
const PostSchema = new Mongoose_1.default.Schema({
    title: String,
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const PostModel = Mongoose_1.default.model("Post", PostSchema);
exports.default = PostModel;
