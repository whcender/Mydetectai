"use server";

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

import bcrypt from 'bcryptjs';

import { prisma } from '@/utils/connect';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFileds = RegisterSchema.safeParse(values);


    if (!validatedFileds.success) {
        return {error: "Email veya şifre hatalı!"};
    }

    const { email, password, name} = validatedFileds.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });


    if(existingUser) {
        return {error: "Bu email adresi zaten kullanılıyor!"}
    }

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });

    // email verification alıncak

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    return {success: "Email Gönderildi!"}
}