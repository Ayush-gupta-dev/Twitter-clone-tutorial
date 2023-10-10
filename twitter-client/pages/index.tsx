import Image from 'next/image'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import { Inter } from 'next/font/google'
import React from 'react';
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi'

const inter = Inter({ subsets: ['latin'] })

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notification',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Profile',
    icon: <BiUser />
  },

]

export default function Home() {
  return (
    <div className={inter.className}>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className='col-span-3 pt-8 px-4'>
          <div className='text-4xl hover:bg-gray-800 rounded-full p-4 h-fit cursor-pointer transition-all w-fit ' >
            <BsTwitter />
          </div>
          <div className='mt-4 text-2xl pr-4 '>
            <ul>
              {sidebarMenuItems.map((item =>
                <li className='flex w-fit justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 cursor-pointer mt-2' key={item.title}>
                  <span>{item.icon}</span>
                  <span> {item.title}</span>
                </li>
              ))}
            </ul>
            <div>
              <button className='bg-[#1d9bf0] rounded-full text-lg
            w-full p-4 font-semibold' >Tweet</button>
            </div>
          </div>
        </div>
        <div className='col-span-6 border-x-[1px] border-gray-400 '></div>
        <div className='col-span-3'></div>
      </div>
    </div>
  )
}
