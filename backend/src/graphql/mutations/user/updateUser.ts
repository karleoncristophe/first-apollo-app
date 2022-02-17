import User from "../../../models/User";
import { UserInterface } from "../../interfaces/UserInterface";

export default async (_: UserInterface, { id, input }: UserInterface) => {
  return await User.findOneAndUpdate({ _id: id }, input, { new: true });
};
