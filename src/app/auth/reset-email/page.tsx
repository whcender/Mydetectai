"use client";

import { useForm } from 'react-hook-form';
import { useTransition, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { ResetSchema } from '@/schemas';
import { FormError } from '@/components/auth/formError';
import { FormSuccess } from '@/components/auth/formSucces';
import { reset } from '@/actions/reset-email';
import Link from 'next/link';

const page = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: '',
        },
    })

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");


        startTransition(() => {
            reset(values)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                    //for 2fa
                })
        });
    }

    return (
        <div className='bg-white rounded-lg  gap-7 flex flex-col  py-6 px-20 max-md:px-2 max-md:py-3 max-md:mt-3 max-md:mb-3'>
            <div className='flex items-center justify-center gap-2 '>
                <img className='w-10' src="https://em-content.zobj.net/source/apple/354/locked-with-key_1f510.png" alt="locked" />
                <h2 className='font-bold text-4xl'>Auth</h2>
            </div>
            <p className='text-center opacity-85 font-normal'>Mail adresinizi değiştirin</p>
            <p className='text-lg font-normal'>Yeni mailini gir.</p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='ahmet.teke@example.com'
                                            type='email'
                                            autoComplete='email'
                                            className='w-[330px]'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    {success
                        ? null
                        : (<Button className='w-[330px]' disabled={isPending}>
                            Mail Gönder
                        </Button>)}

                </form>
            </Form>

            <Link href={"/auth/login"} className='underline text-sm opacity-90 text-center'>Giriş yapmaya geri dön</Link>
        </div>
    )
}

export default page