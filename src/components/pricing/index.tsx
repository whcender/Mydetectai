import React from 'react'
import Fiyat from "@/components/pricing/fiyat"

const index = () => {
  return (
    <div>
      <div className='text-white mt-16 w-[90%] flex gap-6 flex-col justify-center items-center m-auto'>
        <p className='text-6xl font-karantina'>Pricing</p>
        <p className='font-nato max-md:w-full max-md:text-xs text-lg'>you can stay on the 8$ plan until you have enough active users to justify monoging their data or you start selting things</p>
      </div>
      <div>
        <Fiyat />
      </div>
    </div>
  )
}

export default index