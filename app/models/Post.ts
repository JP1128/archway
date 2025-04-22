import mongoose, { Document, Model, Schema } from "mongoose";

export interface PostDocument extends Document {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  topic: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<PostDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Post: Model<PostDocument> =
  mongoose.models?.Post || mongoose.model<PostDocument>("Post", PostSchema);
export default Post;
