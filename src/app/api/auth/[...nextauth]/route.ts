import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from '../../../../lib/db'
import UserModel from '../../../../models/user'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcryptjs";
// import clientPromise from "../../../lib/mongodb";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // Credentials Provider


CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const { email, password } = credentials as { email: string; password: string };
    console.log("AUTHORIZATION")
    // 1. Connect to MongoDB
    await dbConnect();

    // 2. Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      console.log("User not found");
      return null;
    }

    // 3. Compare password using bcrypt
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      console.log("Invalid password");
      return null;
    }

    // 4. Return user object
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      image: user.image || "",
    };
  },
}),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB__CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
  ],
  pages: {
    signIn: "/signin", // Custom sign-in page
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
 callbacks: {
  async jwt({ token, user }) {
    if (user) {
      
      console.log('User:', user); // Add logging here to check user data
      token.id = user.id;
      token.email = user.email;
    }
    return token;
  },
  async session({ session, token }) {
    console.log('Session:', session); // Add logging here to check session data
    if (session && session.user) {
    
      session.user.email = token.email as string;
    }
    return session;
  }
}

//   adapter: MongoDBAdapter(clientPromise), // Use MongoDB adapter if needed
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
