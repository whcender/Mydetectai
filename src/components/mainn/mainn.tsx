import React from 'react'
import { Button } from '../ui/button'

const main = () => {
    return (
        <div className='about mt-20  text-black flex flex-col  items-center justify-center'>
            <div className=' w-[65%] max-md:w-[90%] max-lg:w-[85%] max-xl:w-[70%]  max-2xl:w-[70%] m-auto max-md:flex-col items-center gap-2 max-xl:gap-4 justify-center flex h-[450px] max-md:h-[500px] bg-[#f4f4f4]'>
                <div className='flex flex-col gap-11'>
                    <p className='font-karantina max-md:text-center text-7xl max-md:text-4xl'>- How It Works -</p>
                    <p className='w-[600px] max-md:w-[95%]  font-roboto px-4 text-xs font-bold max-md:text-left'>mydetectai is very simple to use, so it is a successful detection platform used by users. <br />
                        <br />
                        <p className='font-black'>1 - Sign Up.</p>
                        <br />

                        <p className='font-black'>
                            2 - Choose the payment plan.
                        </p>
                        <br />
                        
                        <p className='font-black'>
                            3 - Upload the file and wait for the result.
                            You can use mydetectai simply with these 3 steps.</p>
                        
                        <br />

                        equipment :
                        mydetectai currently only provides video detection services.
                        It searches the video you uploaded among all data and tells you whether it was made with AI or not,
                        Videos below 50 percent will be shown as real, videos made with AI above 50 percent will be shown as AI.
                        The videos you upload are safe with us.</p>

                    <div className='flex items-center justify-center'>
                        <Button className='w-28  bg-black'>Contact Us</Button>
                    </div>

                </div>
                <img className='size-96 max-2xl:hidden max-lg:hidden max-md:hidden' src="hello.svg" alt="" />
            </div>
            <br />
            <br />
            <br />
            <br className='max-md:hidden' />
            <br className='max-md:hidden' />
            <br className='max-md:hidden' />
            <br className='max-md:hidden' />
        </div>
    )
}

export default main