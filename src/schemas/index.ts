import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: "Email hatalı." }
    ),
    password: z.string().min(1, { message: "Şifre boş olamaz." })
});

export const ResetSchema = z.object({
    email: z.string().email({ message: "Email hatalı." }
    ),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, { message: "Şifre minimum 6 karakter olmalı." }),
    passwordConfirm: z.string().min(6, { message: "Şifre minimum 6 karakter olmalı." }),
}).refine(data => data.password === data.passwordConfirm, {
    message: "Şifreler eşleşmiyor.",
    path: ["passwordConfirm"]
})

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Email hatalı." }
    ),
    password: z.string().min(6, { message: "Şifre minimum 6 karakter olmalı." }),
    passwordConfirm: z.string().min(6, { message: "Şifre minimum 6 karakter olmalı." }),
    name: z.string().min(1, { message: "İsim boş olamaz." })
}).refine(data => data.password === data.passwordConfirm, {
    message: "Şifreler eşleşmiyor.",
    path: ["passwordConfirm"]
})