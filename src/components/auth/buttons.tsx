import React from 'react'
import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const buttons = () => {
  return (
    <div className='flex gap-3'>
        <Button  variant={"outline"} className='py-2 px-16'>
            <FcGoogle className='w-5 h-5'/>
        </Button>
        <Button variant={"outline"} className='py-2 px-16'>
            <FaGithub className='w-5 h-5'/>
            </Button>
    </div>
  )
}

export default buttons