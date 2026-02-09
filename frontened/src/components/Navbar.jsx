import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";


const Navbar = () => {
    return (

        

            <div className='flex items-center justify-between mx-3 h-16 '>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-2'>
                        <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                            <GiHamburgerMenu />
                        </div>

                    </div>
                    <img className='w-8 ' src="data:image/png;base64,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" alt="logo" />
                    <h1 className='text-2xl text-gray-500 font-medium '>Gmail</h1>
                </div>
                <div className='w-[50%] mr-60'>
                    <div className='flex items-center bg-[#EAF1FB] rounded-full px-2 py-3'>
                        <GoSearch size={'24px'} className='text-gray-700' />
                        <input className='rounded-full w-full bg-transparent outline-none px-1  ' type="text" placeholder='Search Mail' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='cursor-pointer p-2 rounded-full hover:bg-gray-200'>
                        <GoQuestion size={'24px'} />
                    </div>
                    <div className='cursor-pointer p-2 rounded-full hover:bg-gray-200'>
                        <IoSettings size={'24px'} />
                    </div>
                    <div className='cursor-pointer p-2 rounded-full hover:bg-gray-200'>
                        <TbGridDots size={'24px'} />
                    </div>
                    <Avatar className='hover:bg-gray-200 rounded-full' src="https://example.com/photo.jpg" size="35" round />


                </div>

            </div>
       

    )
}

export default Navbar
