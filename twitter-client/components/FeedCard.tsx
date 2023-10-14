import React from 'react'
import Image from 'next/image'
import {  FaRegComment} from "react-icons/fa";
import {  FiShare} from "react-icons/fi";
import {  AiOutlineHeart} from "react-icons/ai";
import {  BiRepost} from "react-icons/bi";

const FeedCard: React.FC = () => {
    return (
        <div className='border border-t-0 border-x-0  border-gray-600 hover:bg-slate-900 transition-all cursor-pointer '>
            <div className='grid grid-cols-12 p-2 gap-3 '>
                <div className='col-span-2'>
                    <Image src="https://avatars.githubusercontent.com/u/137040550?v=4"
                        alt="usr-img"
                        height={50} width={50}
                        className='rounded-full'
                    />
                </div>
                <div className='col-span-10'>
                    <h4 className='font-semibold'> Ayush Gupta</h4>
               
                        <p className=''>
                            Id enim ea exercitation deserunt mollit laboris fugiat non dolore cupidatat elit dolor. Excepteur enim duis anim anim do ut nisi adipisicing amet nulla dolore mollit do adipisicing. Ex cillum proident cupidatat labore aliquip sunt do velit nulla sint eiusmod qui eiusmod.
                        </p>    
                        <div className='flex w-[90%] text-md my-3 text-slate-200 justify-between pr-12'>
                            <FaRegComment/>
                            <BiRepost size={23} />
                            <AiOutlineHeart size={20}/>
                            <FiShare/>
            </div>              
                </div>
              
            </div>
         

        </div>
    )
}

export default FeedCard