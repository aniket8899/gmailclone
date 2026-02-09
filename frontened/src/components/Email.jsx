import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { FaRegStar } from "react-icons/fa";

const Email = (props) => {
    return (
        <div className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
            <div className='flex items-center gap-3'>
                <div className='text-gray-400'>
                    <MdCropSquare size={'20px'} />
                </div>
                <div className='text-gray-400'>
                    <FaRegStar size={'20px'} />
                </div>
                <div>
                    <p className='font-semibold'>{props.title}</p>
                </div>

            </div>
            <div className='flex-1 ml-4 '>
                {props.p}
            </div>
            <div className='flex-none text-gray text-sm'>
                <p>{props.text} days ago</p>
            </div>


        </div>
    )
}

export default Email
