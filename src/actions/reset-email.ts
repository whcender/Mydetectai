"use server";


import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import {  sendChangeVerificationEmail } from '@/lib/mail';
import {  generateVerificationToken } from '@/lib/tokens';
import { getUserByEmail } from '@/data/user';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFileds = ResetSchema.safeParse(values);

    if(!validatedFileds.success) {
        return { error: "Hatalı Email." };
    }

    const { email } = validatedFileds.data;

    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        return { error: "Bu mail ile kayıtlı başka bir kullanıcı bulunmakta." };
    }


    //Todo generate token and send email
    const verificationToken = await generateVerificationToken(email);
    await sendChangeVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    return { success: "Email adresinizi değiştirmek için Maili onaylayın."}
};