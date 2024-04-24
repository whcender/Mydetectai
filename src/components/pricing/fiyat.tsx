import React from 'react'
import { Button } from '../ui/button'
import { BsArrowRight } from "react-icons/bs";

const fiyat = () => {
  return (
    <div className='text-black w[80%] flex justify-center items-center mt-24 gap-5' >
      <div className=' w-max flex flex-col items-center gap-6 justify-center text-center px-3 py-10 rounded-2xl bg-white '>
        <div className='flex  flex-col gap-3'>
          <p className='font-darker mt-0 text-3xl font-bold opacity-70'>Personal</p>
          <p className='font-libre '>€  <b>12,99</b>/user</p>
        </div>
        <div className='w-60 h-[0.1px] bg-black opacity-45'></div>
        <div className='flex flex-col gap-4 text-left'>
          <div className='flex gap-2'>
            <img src="tik.svg" alt="" /><p>Create personal dashboard.</p>
          </div>
          <div className='flex gap-2'>
            <img src="tik.svg" alt="" /> <p>Organize your and <b>workflows</b>.</p>
          </div>
          <div className='flex gap-2'>
            <img src="tik.svg" alt="" />  <p><b>5GB</b> of space.</p>
          </div>
        </div>

        <div>
          <Button className='bg-[#015d8e]'  >Choose this plan <BsArrowRight size={20} /></Button>
        </div>
      </div>


      <div className=' w-max flex flex-col text-white items-center gap-8 justify-center text-center px-3 py-7 rounded-2xl bg-[#1e1e1e] '>
        <div className='flex  flex-col gap-3'>
          <p className='font-darker mt-0 text-3xl font-bold opacity-70'>Pro Plan</p>
          <p className='font-libre '>€  <b>24,90</b>/user</p>
        </div>
        <div className='w-60 h-[0.1px] bg-white opacity-45'></div>
        <div className='flex flex-col gap-4 text-left'>
          <div className='flex gap-2'>
            <img src="tikbeyaz.svg" alt="" /><p>All features in <b>Personal</b>.</p>
          </div>
          <div className='flex gap-2'>
            <img src="tikbeyaz.svg" alt="" /> <p>Unclock <b>Teams</b> to create a work.</p>
          </div>
          <div className='flex gap-2'>
            <img src="tikbeyaz.svg" alt="" />  <p><b>20GB</b> of shared space.</p>
          </div>
        </div>

        <div>
          <Button className='bg-[#015d8e]'  >Choose this plan <BsArrowRight size={20} /></Button>
        </div>
      </div>



     
    </div>
  )
}

export default fiyat