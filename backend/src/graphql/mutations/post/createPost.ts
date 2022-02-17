import Post from "../../../models/Post";
import { PostInterface } from "../../interfaces/PostInterface";

export default async (_: PostInterface, { input }: PostInterface) => {
  return await Post.create(input);
};
