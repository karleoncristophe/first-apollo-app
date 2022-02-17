import Post from "../../../models/Post";
import { PostInterface } from "../../interfaces/PostInterface";

export default async (_: PostInterface, id: PostInterface) => {
  return await Post.findOne(_, { _id: id });
};
