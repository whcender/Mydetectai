import React from 'react'
import User from "@/components/user/index"
import Menu from "@/components/menu"



const index = () => {
  return (
    <div className='fixed w-full z-50 bg-black top-0'>
      <div className='w-[80%] m-auto py-7 '>
        <div className='flex justify-between'>
          <img className='w-[150px] max-md:w-[100px]' src="ailogo.png" alt="" />
          <div className='flex items-center gap-4'>
            <User />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index