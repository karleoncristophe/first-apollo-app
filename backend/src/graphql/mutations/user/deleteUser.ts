import User from "../../../models/User";

import { UserInterface } from "../../interfaces/UserInterface";

export default async (_: UserInterface, { id }: UserInterface) => {
  const deleted = await User.findByIdAndDelete({ _id: id });
  return !!deleted;
};
