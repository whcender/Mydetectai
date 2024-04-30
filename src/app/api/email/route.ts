import { prisma } from "@/utils/connect";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { email } =  await req.json()

    await prisma.email.create({
        data: {
            email
        }
    })
};

export const GET = async (req: NextRequest) => {
    const emails = await prisma.email.findMany()

    return emails
};