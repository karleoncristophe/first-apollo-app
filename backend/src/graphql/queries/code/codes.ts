import Code from "../../../models/Code";

export default async () => {
  return await Code.find({}).populate("user");
};
