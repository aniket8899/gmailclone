import React from 'react'
import { LuPencil } from "react-icons/lu";
import { CgInbox } from "react-icons/cg";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";

const sidebaritems = [
    {
        icon: <CgInbox size={'24px'} />,
        text: "Inbox"

    },
    {
        icon: <IoMdStarOutline size={'24px'} />,
        text: "Starred"

    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"

    },
    {
        icon: <TbSend2 size={'24px'} />,
        text: "Send"

    },
    {
        icon: <MdOutlineDrafts size={'24px'} />,
        text: "Drafts"

    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
        text: "More"

    },


]

const Sidebars = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='flex itmes-center gap-2 bg-[#C2E7FF] px-5 py-4 rounded-2xl hover:shadow-md cursor-pointer'>
                    <LuPencil size={'20px'} />
                    Compose
                </button>
            </div>
            <div className='text-gray-700'>
                {
                    sidebaritems.map((item, index) => {
                        return (
                            <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200'>
                                {item.icon}
                                <p>{item.text}</p>

                            </div>

                        )
                    })

                }

            </div>
        </div>
    )
}

export default Sidebars
