import Code from "../../../models/Code";

export default async (_: any, { code }: any) => {
  const data = await Code.findOne({ code });

  return data;
};
