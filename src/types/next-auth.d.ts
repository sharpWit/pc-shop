// Instruments //
import NextAuth from "next-auth";

// Types //
import { IUser } from "./user";

declare module "next-auth" {
  interface User {
    username: string;
  }
  interface Session {
    user: User &
      IUser & {
        username: string;
        isAdmin: Boolean;
      };
    token: {
      username: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}
