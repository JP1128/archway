import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    credentials({
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
          const user = await User.findOne({
            email: credentials?.email,
          }).select("+password");

          if (!user) throw new Error("Wrong email address");

          // authorize password
          const passwordMatch = await bcrypt.compare(
            credentials!.password,
            user.password,
          );

          if (!passwordMatch) throw new Error("Wrong password");

          return user;
        } catch (error) {
          console.log("Error occured during authorize(credentials)", error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
