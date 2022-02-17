import User from "../../../models/User";
import { CodeInterface } from "../../interfaces/CodeInterface";

export default async (_: CodeInterface, { id }: CodeInterface) => {
  return await User.findOne({ _id: id });
};
