import mongoose from "mongoose";
import dontenv from "dotenv";

dontenv.config();
const DB: any = process.env.DB;

const configDB: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const Connect = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(DB, configDB);
    console.log("Mongodb is connected!");
    return db;
  } catch (e) {
    console.log(e);
  }
};

Connect();

export default mongoose;
