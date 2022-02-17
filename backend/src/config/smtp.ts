import dontenv from "dotenv";
dontenv.config();

const password = process.env.PASSWORD;
const email = process.env.EMAIL;
const emailhost = process.env.EMAIL_HOST;
const emailport = Number(process.env.EMAIL_PORT);

export default {
  host: emailhost,
  port: emailport,
  user: email,
  pass: password,
};
