import User from "../../../models/User";
import { UserInterface } from "../../interfaces/UserInterface";

export default async (_: UserInterface, { id }: UserInterface) => {
  return await User.findOne({ _id: id });
};
