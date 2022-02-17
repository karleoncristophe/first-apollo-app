import mongoose from "../lib/Mongoose";
const Schema = mongoose.Schema;

export interface Code {
  code: number;
  user: any;
}

const CodeSchema = new mongoose.Schema<Code>(
  {
    code: Number,
    user: {
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

const CodeModel = mongoose.model<Code>("Code", CodeSchema);
export default CodeModel;
