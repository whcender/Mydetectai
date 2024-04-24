import React from 'react'

const index = () => {
    return (
        <div className='text-white  mt-36 max-lg:mt-36'>
            <div className='w-[80%] max-lg:w-[90%] m-auto max-lg:flex-col flex justify-between items-center max-md:gap-6'>
                <h1 className='text-[55px] max-lg:text-[40px] max-md:text-[30px] w-[45%] max-lg:w-[90%] font-darker'>Harnessing Artificial Intelligence Tools for <br /> Naturally Image Generator</h1>
                <div className='flex w-[50%] max-lg:w-[90%] flex-col gap-2 max-md:gap-2  justify-end'>
                    <div className='flex gap-1 '>
                        <img className='size-10 max-lg:size-8' src="ates.svg" alt="" />
                        <img className='size-10 max-lg:size-8' src="kalp.svg" alt="" />
                        <img className='size-10 max-lg:size-8' src="dunya.svg" alt="" />
                    </div>
                    <p className='w-[90%] text-base   max-md:text-sm font-work max-lg:w-[100%] '>In the realm of creativity, technology has become a powerful ally for artists, writers, designers, and creators of all kinds. Artificially intelligent (AI) tools have emerged as valuable companions, assisting naturally creative humans in their creative processes.</p>
                </div>
            </div>
        </div>
    )
}

export default index