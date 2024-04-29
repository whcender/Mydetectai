import React from 'react'
import Mainn from "@/app/aboutus/main"


const page = () => {
  return (
    <div className='text-white'>
      <div className='mt-40 max-md:mt-28 gap-3 text-center flex flex-col items-center justify-center'>
        <p className='font-roboto text-center text-base'>-become one of us-</p>
        <p className='font-roboto max-md:text-5xl font-bold text-7xl'>Who Are We</p>
        <p className='font-nato w-[60%] max-md:w-[90%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam quam molestiae iure consequatur quaerat dolorum, eum quae deleniti voluptate vitae reprehenderit at doloremque atque obcaecati iste excepturi temporibus neque?</p>

      </div>
      <Mainn />
     
    </div>
  )
}

export default page