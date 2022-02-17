import dontenv from "dotenv";
import jwt from "jsonwebtoken";
dontenv.config();

const APPKEY: any = process.env.APPKEY;

const authenticate = (req: any, res: any, next: any) => {
  const header = req.headers.authorization;

  if (header) {
    const token = header.replace("Bearer ", "");

    try {
      const decoded: any = jwt.verify(token, APPKEY);

      req.logged = decoded.id;

      return next();
    } catch (e) {
      next(res.status(401).send({ error: "Access denied." }));
    }
  }
  next();
};

export default authenticate;
