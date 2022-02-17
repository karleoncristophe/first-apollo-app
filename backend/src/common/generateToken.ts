import jwt from "jsonwebtoken";
import dontenv from "dotenv";
dontenv.config();

const APPKEY: any = process.env.APPKEY;

const generateToken = (params: any) => {
  return jwt.sign(params, APPKEY, {
    expiresIn: "1d",
  });
};

export default generateToken;
