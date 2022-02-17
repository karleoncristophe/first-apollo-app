import Post from "../../../models/Post";
import { PostInterface } from "../../interfaces/PostInterface";

export default async (_: PostInterface, { id }: PostInterface) => {
  const deleted = await Post.findOneAndDelete({ _id: id });
  return !!deleted;
};
