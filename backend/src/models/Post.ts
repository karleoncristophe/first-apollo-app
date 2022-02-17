import mongoose from "../lib/Mongoose";
const Schema = mongoose.Schema;

interface Post {
  title: string;
  content: string;
  author: {
    _id: string;
    name: string;
    email: string;
    active: boolean;
  };
}

const PostSchema = new mongoose.Schema<Post>(
  {
    title: String,
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const PostModel = mongoose.model<Post>("Post", PostSchema);
export default PostModel;
