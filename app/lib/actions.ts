"use server";

import connectDB from "@/lib/mongodb";
import createUserAvatar from "@/lib/avatar";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { z } from "zod";

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
