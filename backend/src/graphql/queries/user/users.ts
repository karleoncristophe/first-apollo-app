import User from "../../../models/User";

export default async () => {
  return await User.find({});
};
