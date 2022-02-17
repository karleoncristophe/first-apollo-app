import { UserInputError } from "apollo-server";
import Code from "../../../models/Code";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

export default async (_: any, { input }: any) => {
  const { password, user, code } = input;

  const hash = await bcrypt.hash(password, 10);

  const data: any = await Code.findOne({ code });

  if (data.code !== code) {
    throw new UserInputError("Invalid Code.");
  }

  data.password = hash;

  await User.findOneAndUpdate(
    { id: user },
    { password: hash },
    { new: true }
  ).select("+password");

  return data;
};
