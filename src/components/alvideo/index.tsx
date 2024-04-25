import React from 'react'

const index = () => {
    return (
        <div className='bg-white mt-24 ' >
            <div className=' py-16 w-[70%] m-auto flex max-lg:flex-col items-center justify-between gap-20 '>
                <div>
                    <img className='w-[500px]' src="alof.png" alt="" />
                </div>
                <div className='w-[40%] max-md:w-full max-lg:w-full flex flex-col gap-9 max-md:gap-5 items-center'>
                    <p className='font-karantina font-black max-md:text-5xl max-xl:text-6xl max-2xl:text-6xl max-2xl:text-center text-8xl'>Verify your data</p>
                    <p className='font-work max-md:text-base text-center'>In the realm of creativity, technology has become a powerful ally for artists, writers, designers, and creators of all kinds. Artificially intelligent (AI) tools have emerged as valuable companions, assisting naturally creative humans in their creative processes.</p>
                </div>
            </div>
        </div>
    )
}

export default index