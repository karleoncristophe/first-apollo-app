import mongoose from "../lib/Mongoose";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const UserModel = mongoose.model<User>("User", UserSchema);
export default UserModel;
