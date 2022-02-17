"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
const redis_1 = __importDefault(require("../config/redis"));
const jobs = __importStar(require("../jobs"));
const queues = Object.values(jobs).map((job) => ({
    bull: new bull_1.default(job.key, { redis: redis_1.default }),
    name: job.key,
    handle: job.handle,
    options: job.options,
}));
exports.default = {
    queues,
    add(name, data) {
        const queue = this.queues.find((queue) => queue.name === name);
        return queue === null || queue === void 0 ? void 0 : queue.bull.add(data, queue.options);
    },
    process() {
        return this.queues.forEach((queue) => {
            queue.bull.process(queue.handle);
            queue.bull.on("failed", (job, err) => {
                console.log("Jobs failed", job.data);
                console.log(err);
            });
        });
    },
};
