import React, { useState } from 'react'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from 'react-icons/go';
import Emails from './Emails';

const mailtype = [
    {
        icons: <MdInbox size={"20px"} />,
        text: "Primary"
    },
    {
        icons: <GoTag size={"20px"} />,
        text: "Promotions"
    },
    {
        icons: <FaUserFriends size={"20px"} />,
        text: "Social"
    }

]

const Inbox = () => {
    const [selected, setselected] = useState(0);
    return (
        <div className='flex-1 bg-white rounded-xl mx-5'>

            <div className='flex items-center justify-between px-4 my-2'>
                <div className='flex items-center gap-2 '>
                    <div className='flex items-center gap-1'>
                        <MdCropSquare size={'20px'} />
                        <FaCaretDown size={'10px'} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <IoMdRefresh size={'20px'} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <IoMdMore size={'20px'} />
                    </div>



                </div>
                <div className='flex items-center gap-2'>
                    <span>1 to 50</span>
                    <MdKeyboardArrowLeft size={'20px'} />
                    <MdKeyboardArrowRight size={'20px'} />
                </div>

            </div>
            <div className='h-90vh overflow-y-auto'>
                <div className='flex items-center gap-1'>
                    {
                        mailtype.map((item, index) => {
                            return (
                                <button onClick={() => setselected(index)} className={` ${selected == index ? "border-b-4 border-b-blue-600 text-blue-600 " : " border-b-4 border-b-transparent "} flex items-center gap-5 p-4 w-65 hover:bg-gray-100`}>
                                    {item.icons}
                                    <span>{item.text}</span>
                                </button>

                            )
                        })
                    }
                </div>
                <Emails />

            </div>


        </div>
    )
}

export default Inbox
