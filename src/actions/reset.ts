"use server";


import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFileds = ResetSchema.safeParse(values);

    if(!validatedFileds.success) {
        return { error: "Hatalı Email." };
    }

    const { email } = validatedFileds.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser) {
        return { error: "Email bulunamadı." };
    }

    //Todo generate token and send email
    const passwordResetToken = await generatePasswordResetToken(email);
    await sendResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return { success: "Sıfırlama Maili gönderildi."}
};