// src/types/next-auth.d.ts
import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add id here
      email: string;
      name?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}
