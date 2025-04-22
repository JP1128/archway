import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserDocument extends Document {
  _id: string;
  email: string;
  password: string;
  avatar_uri: string;
  fullname: string;
  major: string;
  year: "freshman" | "sophomore" | "junior" | "senior" | "super senior";
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar_uri: {
      type: String,
      required: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    major: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      enum: ["freshman", "sophomore", "junior", "senior", "super senior"],
      required: true,
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

const User: Model<UserDocument> =
  mongoose.models?.User || mongoose.model<UserDocument>("User", UserSchema);
export default User;
