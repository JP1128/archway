import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const { auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          await connectDB();

          // find user with the provided email
          const user = await User.findOne({ email: credentials?.email });
          if (!user) throw new Error("Wrong email address");

          // authorize password
          const passwordMatch = await bcrypt.compare(
            credentials?.password,
            user.password,
          );
          if (!passwordMatch) throw new Error("Wrong password");
        } catch (error) {
          console.log("Error occured during authorize(credentials)", error);
        }
      },
    }),
  ],
});
