import React from 'react'
import Input from "@/components/choose/input"
import { Button } from '../ui/button'

const index = () => {
    return (
        <div className='arkaplan'>
            <div className='w-[60%] max-md:w-[90%] max-lg:w-[90%] max-xl:w-[90%] max-2xl:w-[80%] max-md:h-[370px] gap-20 max-lg:gap-5 m-auto flex  max-lg:flex-col max-md:flex-col justify-center items-center rounded-3xl h-[330px] max-lg:h-[370px] bg-[#f1f1f1]'>
                <div >
                    <img className='max-md:size-40 max-xl:size-72 max-lg:size-44' src="man.svg" alt="" />
                </div>
                <div className='flex flex-col text-center max-lg:gap-3 gap-8'>
                    <p className='font-karantina font-black text-7xl max-md:text-4xl'>Choose MydetectAi!</p>
                    <p className='text-xl max-md:text-base max-lg:text-lg'>Subscribe to our newsletter and get upto 40% off on our exclusive products. </p>
                    <div className='flex justify-center items-center '>
                        <Input />
                        <Button className='bg-[#0299e9] rounded-none'>Subscrıbe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index