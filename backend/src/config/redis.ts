import dontenv from "dotenv";
dontenv.config();

const redishost: any = process.env.REDIS_HOST;
const redisport: any = process.env.REDIS_PORT;

export default {
  host: redishost,
  port: redisport,
};
