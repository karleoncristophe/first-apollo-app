import { UserInterface } from "../../interfaces/UserInterface";
import generateToken from "../../../common/generateToken";
import { UserInputError } from "apollo-server";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async (
  _: UserInterface,
  { input: { email, password } }: UserInterface
) => {
  const user: any = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UserInputError("User not registered.");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new UserInputError("Invalid password.");
  }

  const token = generateToken({ id: user.id });

  if (!match) {
    throw new UserInputError("Sem token.");
  }

  delete user.password;

  return { token, user };
};
