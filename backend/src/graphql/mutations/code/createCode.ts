import User from "./../../../models/User";
import { UserInputError } from "apollo-server";
import MAIL_JOBS from "../../../constants/MAIL_JOBS";
import Queue from "../../../lib/Queue";
import { CodeInterface } from "../../interfaces/CodeInterface";
import Code from "../../../models/Code";

export default async (
  _: CodeInterface,
  min: number,
  max: number,
  input: CodeInterface
) => {
  const email = await User.findOne({ input });

  if (!email) {
    throw new UserInputError("User not found.");
  }

  min = Math.ceil(111111);
  max = Math.floor(999999);

  const code = Math.floor(Math.random() * (max - min)) + min;

  const getRandomInt = async () => {
    return code;
  };

  function generate(codes: any) {
    const newCode = getRandomInt();
    if (codes.includes(newCode)) generate(codes);
    return newCode;
  }

  const user = await Code.create({ user: email, code });

  Queue.add(MAIL_JOBS.FORGOT_PASSWORD, user);

  return user;
};
