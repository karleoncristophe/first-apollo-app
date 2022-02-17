"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const Queue_1 = __importDefault(require("./lib/Queue"));
Queue_1.default.process();
console.log("Queue run =)");
