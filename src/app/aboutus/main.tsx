import React from 'react'
import { Button } from '@/components/ui/button'

const main = () => {
    return (
        <div className='about mt-20  text-black flex flex-col  items-center justify-center'>
            <div className=' w-[60%] max-md:w-[90%] m-auto max-md:flex-col items-center gap-28 justify-center flex h-[450px] max-md:h-[600px] bg-[#f4f4f4]'>
                <div className='flex flex-col gap-11'>
                    <p className='font-karantina max-md:text-center text-7xl max-md:text-4xl'>- About Us -</p>
                    <p className='w-[600px] max-md:w-[95%] max-md:text-center font-roboto px-4 text-xs font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusantium illum id blanditiis cum voluptatem repellendus, ratione voluptatibus tempore qui sunt illo? Sit, fugiat magni veniam eveniet perferendis quisquam quo id blanditiis cum voluptatem repellendus, ratione voluptatibus tempore qui sunt illo? Sit, fugiat magni veniam eveniet perferendis quisquam quo <br /> <br /> <br />

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quo modi aspernatur, commodi vel sapiente asperiores et consequatur quos doloremque accusamus facilis pariatur ad blanditiis, veniam, enim non qui. Aliquid! <br /> <br /> <br />

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ad sint facere aliquam libero quae voluptates, iusto !</p>

                    <div className='flex items-center justify-center'>
                        <Button className='w-28  bg-black'>Contact Us</Button>
                    </div>

                </div>
                <img className='size-96 max-md:hidden' src="hello.svg" alt="" />
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