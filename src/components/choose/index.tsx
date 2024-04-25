import React from 'react'
import Input from "@/components/choose/input"
import { Button } from '../ui/button'

const index = () => {
    return (
        <div>
            <div className='w-[900px] gap-10 m-auto flex max-md:flex-col justify-center items-center h-[300px] bg-white'>
                <div >
                    <img src="man.svg" alt="" />
                </div>
                <div className='flex flex-col text-center gap-5'>
                    <p className='font-karantina font-black text-5xl'>Choose MydetectAi!</p>
                    <p className='text-xl'>Subscribe to our newsletter and get upto 40% off on our exclusive products. </p>
                    <div className='flex justify-center '>
                        <Input />
                        <Button className='bg-[#0299e9]'>Subscrıbe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index