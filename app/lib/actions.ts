"use server";

import connectDB from "@/lib/mongodb";
import createUserAvatar from "@/lib/avatar";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { z } from "zod";
import Post from "@/models/Post";

const DEFAULT_SALT = 10;

const RegisterFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  fullname: z.string(),
  major: z.string(),
  year: z.enum(["freshman", "sophomore", "junior", "senior", "super senior"]),
});

export async function register(formData: FormData) {
  const { email, password, fullname, major, year } = RegisterFormSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
    fullname: formData.get("fullname"),
    major: formData.get("major"),
    year: formData.get("year"),
  });

  try {
    await connectDB();

    const userFound = await User.findOne({ email });
    if (userFound)
      return {
        error: "Email already exists!",
      };

    const avatar_uri = createUserAvatar(email).toDataUri();
    const hashedPassword = await bcrypt.hash(password, DEFAULT_SALT);
    await User.create({
      email,
      password: hashedPassword,
      avatar_uri,
      fullname,
      major,
      year,
    });
  } catch (error) {
    console.log("Error occured during register(formData)", error);
  }
}

export async function getUser(email: string) {
  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (!userFound) return null;

    return userFound;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id: string) {
  try {
    await connectDB();
    const post = await Post.findById(id);

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts() {
  try {
    await connectDB();
    const posts = await Post.find();
    posts.sort(
      (post_a, post_b) =>
        post_b.createdAt.getTime() - post_a.createdAt.getTime(),
    );
    if (!posts) return null;

    return posts;
  } catch (error) {
    console.log(error);
  }
}

const CreatePostSchema = z.object({
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  topic: z.string(),
  author: z.string(),
  content: z.string(),
});

export async function createPost(formData: FormData) {
  const { title, description, thumbnail, topic, author, content } =
    CreatePostSchema.parse({
      title: formData.get("title"),
      description: formData.get("description"),
      thumbnail: formData.get("thumbnail"),
      topic: formData.get("topic"),
      author: formData.get("author"),
      content: formData.get("content"),
    });

  try {
    await connectDB();
    const response = await Post.create({
      title,
      description,
      thumbnail,
      topic,
      author,
      content,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
const UpdatePostSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  topic: z.string(),
  author: z.string(),
  content: z.string(),
});

export async function updatePost(formData: FormData) {
  const { id, title, description, topic, author, content } =
    UpdatePostSchema.parse({
      id: formData.get("id"),
      title: formData.get("title"),
      description: formData.get("description"),
      topic: formData.get("topic"),
      author: formData.get("author"),
      content: formData.get("content"),
    });

  try {
    await connectDB();
    const response = await Post.updateOne(
      { _id: id },
      {
        title,
        description,
        topic,
        author,
        content,
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(id: string) {
  try {
    await connectDB();
    const response = await Post.deleteOne({ _id: id });
    return response;
  } catch (error) {
    console.log(error);
  }
}
