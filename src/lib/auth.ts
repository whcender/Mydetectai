import { auth } from "@/auth";
import { headers } from "next/headers";

export const currentUser = async () => {
  const session = await auth();
  headers();

  return session?.user;
};

export const isAdmin = async () => {
  const session = await auth();
  headers();

  return session?.user.role;
};
