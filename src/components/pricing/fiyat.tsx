import React from 'react'
import { Button } from '../ui/button'
import { BsArrowRight } from "react-icons/bs";

const fiyat = () => {
  return (
    <div className='text-black' >
      <div className=' w-max flex flex-col items-center gap-6 justify-center text-center px-5 py-14 rounded-2xl bg-white '>
        <p className='font-darker text-3xl font-bold'>Personal</p>
        <p className='font-nato font-bold'>€  <b>12,99</b>/user</p>
        <div className='w-60 h-[0.1px] bg-black opacity-45'></div>
        <div className='flex flex-col gap-4 text-left'>
          <div className='flex gap-2'>
            <img src="tik.svg" alt="" /><p>Create personal dashboard.</p>
          </div>
          <div className='flex gap-2'>
            <img src="tik.svg" alt="" /> <p>Organize your notes and workflows.</p>
          </div>
          <div className='flex gap-2'>
            <img src="tik.svg" alt="" />  <p>5GB of space.</p>
          </div>
        </div>

        <div>
          <Button  >Choose this plan <BsArrowRight size={20} /></Button>
        </div>
      </div>
    </div>
  )
}

export default fiyat