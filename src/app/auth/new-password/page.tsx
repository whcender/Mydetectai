"use client";

import { useForm } from 'react-hook-form';
import { useTransition, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';

import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormMessage,
    FormItem,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { NewPasswordSchema } from '@/schemas';
import { FormError } from '@/components/auth/formError';
import { FormSuccess } from '@/components/auth/formSucces';
import { newPassword } from '@/actions/new-password';
import Link from 'next/link';

const page = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
            passwordConfirm: '',
        },
    })


    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                });
        });
    };

    return (
        <div className='bg-white rounded-lg  gap-7 flex flex-col  py-6 px-20 max-md:px-2 max-md:py-3 max-md:mt-3 max-md:mb-3'>
            <div className='flex items-center justify-center gap-2 '>
                <img className='w-10' src="https://em-content.zobj.net/source/apple/354/locked-with-key_1f510.png" alt="locked" />
                <h2 className='font-bold text-4xl'>Auth</h2>
            </div>
            <p className='text-center opacity-85 font-normal'>Yeni Şifreni Gir.</p>
            <p className='text-lg font-normal'>Şifreni yenile</p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Şifre</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='******'
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name='passwordConfirm'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Şifreyi Onayla</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='******'
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <p className='text-xs opacity-80'>- Şifreniz minimum 6 karakter olmalıdır.</p>
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button className='w-[330px]' disabled={isPending}>Şifreyi yenile</Button>
                </form>
            </Form>

            <Link href={"/auth/login"} className='underline text-sm opacity-90 text-center'>Giriş yapmaya geri dön</Link>
        </div>
    )
}

export default page