import React from 'react'
import Mainn from "@/components/mainn/mainn"


const page = () => {
  return (
    <div className='text-white'>
      <div className='mt-40 max-md:mt-28 gap-3 text-center flex flex-col items-center justify-center'>
        <p className='font-roboto text-center text-base'>-become one of us-</p>
        <p className='font-roboto max-md:text-5xl font-bold text-7xl'>Who Are We</p>
        <p className='font-nato w-[60%] max-md:w-[90%] text-center'>
          Recently, innovations related to AI have started to come one after another in the world.
          So, you may be thinking, how should we keep ourselves safe when there is so much data?
          Mydetectai.com, tells you whether a product is made by artificial intelligence or by human hands.
          keeps you safe.</p>

      </div>
      <Mainn />

    </div>
  )
}

export default page