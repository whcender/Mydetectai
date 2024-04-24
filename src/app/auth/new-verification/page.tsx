"use client";

import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

import { BeatLoader } from 'react-spinners';
import { newVerification } from '@/actions/new-verification';
import { FormError } from '@/components/auth/formError';
import { FormSuccess } from '@/components/auth/formSucces';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (!token) {
            setError("Token yok");
            return;
        }

        newVerification(token)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
                setTimeout(() => {
                    router.push(`/auth/login?key=yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5?email=${data?.email}`);
                }, 2000);
            }).catch(() => {
                setError("Bir hata oluştu");
            })
    }, [token])

    useEffect(() => {
        onSubmit();
    }, [onSubmit])
    return (
        <div className='bg-white rounded-lg  gap-7 flex flex-col  py-6 px-20 max-md:px-2 max-md:py-3 max-md:mt-3 max-md:mb-3'>
            <div className='flex items-center justify-center gap-2 '>
                <img className='w-10' src="https://em-content.zobj.net/source/apple/354/locked-with-key_1f510.png" alt="locked" />
                <h2 className='font-bold text-4xl'>Auth</h2>
            </div>
            <p className='text-center opacity-85 font-normal'>E-mail adresiniz doğrulanıyor..</p>
            <div className='flex items-center justify-center w-full'>
                {!success && !error ? (
                    <BeatLoader />

                ) : (
                    <div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        {success && <p className='text-sm mt-3 opacity-90'>Giriş sayfasına yönlendiriliyorsunuz...</p>}
                    </div>
                )}

            </div>
            <Link href={"/auth/login"} className='underline text-sm opacity-90 text-center'>Giriş yapmaya dön</Link>
        </div>
    )
}

export default page