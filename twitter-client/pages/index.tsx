import Image from 'next/image'
import {BsTwitter} from 'react-icons/bs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return (
  <div>
    <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3 flex justify-start pt-8'>
        <div  className='text-4xl hover:bg-gray-800 rounded-full p-2 h-fit cursor-pointer transition-all ' >
        <BsTwitter/>
        </div>
      </div>
      <div className='col-span-6 border-x-[1px] border-gray-400 '></div>
      <div className='col-span-3'></div>
    </div>
  </div>
 )
}
