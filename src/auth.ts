import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { prisma } from "@/utils/connect"
import authConfig from "./auth.config"
import { UserRole } from "@prisma/client";
import { getUserById } from "./data/user"



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;
      //bura deneme
      const existingUser = await getUserById(user.id ?? "");

      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async session({ token, session }) {

      if (token.sub && session.user) {
        session.user.id = token.sub
      }


      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
        
      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session:{ strategy: "jwt"},
  ...authConfig,
})