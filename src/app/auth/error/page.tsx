import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='bg-white rounded-lg  gap-7 flex flex-col  py-6 px-20 max-md:px-10 max-md:py-3 max-md:mt-3 max-md:mb-3'>
            <div className='flex items-center justify-center gap-2 '>
                <img className='w-10' src="https://em-content.zobj.net/source/apple/354/locked-with-key_1f510.png" alt="locked" />
                <h2 className='font-bold text-4xl'>Auth</h2>
            </div>
            <p className='text-center opacity-85 font-normal'>Ooops birşeyler yanlış gitti! :(</p>
            <p className='text-lg font-normal'></p>

            <Link href={"/auth/login"} className='underline text-sm opacity-90 text-center'>Giriş yapmaya dön</Link>
        </div>
    )
}

export default page