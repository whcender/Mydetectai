import React from 'react'

const index = () => {
    return (
        <div className='w-[80%] max-md:w-[90%]  flex justify-between max-lg:flex-col items-center m-auto text-white'>
            <div className='flex flex-col gap-6 mt-16 mb-10'>
                <img className='w-52 max-xl:w-40' src="ailogo.png" alt="" />
                <p className='max-xl:text-xs'>Download the app by clicking the link below :</p>
                <div className='flex'>
                    <a href=""> <img className='max-xl:size-28' src="playstore.svg" alt="" />  </a>
                    <a href=""> <img className='max-xl:size-28' src="appstore.svg" alt="" />  </a>
                </div>
            </div>
            <div className='flex gap-20 max-md:gap-5 max-xl:gap-9'>
                <div className='flex flex-col gap-9'>
                    <p className='font-roboto font-bold text-2xl max-md:text-lg max-xl:text-lg' >Pages</p>
                    <div className='flex max-md:text-xs max-xl:text-xs flex-col gap-5'>
                        <a href="">Home it work</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>
                        <a href="">Demo</a>
                    </div>
                </div>

                <div className='flex flex-col gap-9'>
                    <p className='font-roboto font-bold text-2xl max-md:text-lg max-xl:text-lg' >Service</p>
                    <div className='flex max-md:text-xs max-xl:text-xs flex-col gap-5'>
                        <a href="">Shopify</a>
                        <a href="">WordPress</a>
                        <a href="">UI/UX Design</a>
                        
                    </div>
                </div>

                <div className='flex flex-col gap-9'>
                    <p className='font-roboto font-bold text-2xl max-md:text-lg max-xl:text-lg' >Contact</p>
                    <div className='flex max-md:text-xs max-xl:text-xs flex-col gap-5'>
                        <a className='flex gap-3 max-md:gap-1' href="">
                            <img className='max-md:size-5' src="telefon.svg" alt="" /> -0(555) 555 55 55-
                        </a>
                        <a className='flex gap-3 max-md:gap-1' href="">
                            <img className='max-md:size-5' src="mail.svg" alt="" /> arlanmedya@gmail.com
                        </a>
                        <a className='flex gap-3 max-md:gap-1' href="">
                            <img className='max-md:size-5' src="konum.svg" alt="" /> Turkey/Erzurum
                        </a>
                        
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-10 max-xl:gap-5 max-lg:mt-10 mb-28'>
                <p className='font-roboto font-bold text-2xl max-xl:text-lg max-md:hidden'>Social Media</p>
                <div className='flex items-center gap-3'>
                    
                    <a href="">
                        <img className='size-8' src="fb.svg" alt="" />
                    </a>
                    <a href="">
                        <img className='size-8' src="x.svg" alt="" />
                    </a>
                    <a href="">
                        <img className='size-5' src="in.svg" alt="" />
                    </a>
                    <a href="">
                        <img className='size-8' src="ig.svg" alt="" />
                    </a>
                    
                </div>
            </div>

        </div>
    )
}

export default index