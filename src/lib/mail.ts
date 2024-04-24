import { Resend } from "resend";
import VerificationMail from "@/components/email/verificationMail"
import { domain } from "@/utils/check"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const coniformLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "info@arlanqrmenu.com",
        to: email,
        subject: "Selam! E Posta Adresini Onayla",
        react: VerificationMail({ confirmLink: coniformLink }) as React.ReactElement,
    })
}

export const sendResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "info@arlanqrmenu.com",
        to: email,
        subject: "Selam! Şifreni Yenile",
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    })
}