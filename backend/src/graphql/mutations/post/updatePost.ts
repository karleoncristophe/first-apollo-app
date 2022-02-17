import Post from "../../../models/Post";
import { PostInterface } from "../../interfaces/PostInterface";

export default async (_: PostInterface, { id, input }: PostInterface) => {
  return await Post.findOneAndUpdate({ _id: id }, input, { new: true });
};
