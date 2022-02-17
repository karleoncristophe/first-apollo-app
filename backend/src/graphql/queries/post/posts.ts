import Post from "../../../models/Post";

export default async () => {
  return await Post.find({}).populate("author");
};
