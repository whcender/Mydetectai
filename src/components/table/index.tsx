import React from 'react'
import Avatar from "@/components/avatar/index"

const index = () => {
    return (
        <div className='w-[80%]  mt-20 flex max-lg:flex-col max-lg:w-[90%]  m-auto max-md:gap-10 gap-16'>
            <div className='w-[40%] max-md:w-full max-lg:w-[90%] py-9 px-12 max-xl:px-6 max-md:py-4 max-md:px-7 h-[250px] max-md:h-[240px] max-xl:h-[280px] flex flex-col  gap-10 max-xl:gap-7 rounded-[50px] bg-white table1'>
                <div className='flex flex-col gap-4'>
                    <p className='font-roboto font-black text-white text-4xl max-md:text-5xl max-xl:text-4xl max-lg:text-5xl max-2xl:text-5xl'>920+</p>
                    <p className='flex items-center font-roboto font-semibold text-white text-xl max-md:text-xl max-xl:text-2xl max-2xl:text-2xl max-lg:text-3xl '>
                        Project finis with us 920 happy happy customer :)
                    </p>
                </div>
                <Avatar />

            </div>
            <div className='w-[50%] max-lg:w-full relative flex items-center justify-center max-xl:h-[280px]  h-[250px] rounded-[50px] max-md:h-[240px] bg-white'>
                  <p className='font-roboto font-black text-black text-6xl max-xl:text-5xl max-2xl:text-5xl max-lg:text-6xl max-md:text-4xl'>HOW WE WORK?</p>
                  <img className='absolute cursor-pointer size-16 max-xl:size-20 bottom-0 right-0' src="button.svg" alt="" />
            </div>
        </div>
    )
}

export default index