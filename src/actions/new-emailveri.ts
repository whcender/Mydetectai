"use server";

import { prisma } from "@/utils/connect";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificiation-token";
import { sendVerificationEmail } from "@/lib/mail";
import { currentUser} from "@/lib/auth"

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const resetMail = existingToken.email;

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    await sendVerificationEmail(
      existingToken.email,
      existingToken.token
    )
    return { error: "Token has expired!" };
  }
  const cuser = await currentUser()
  const userEmail = cuser?.email || '';
  const existingUser = await getUserByEmail(userEmail);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      email: resetMail,
    }
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id }
  });


  return { success: "Email verified!", email: existingToken.email };
};