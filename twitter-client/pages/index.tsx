import Image from 'next/image'
import { BsBell, BsBookmark, BsEnvelope, BsOption, BsTwitter } from 'react-icons/bs'
import React, { useCallback } from 'react';
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi'
import FeedCard from '@/components/FeedCard';
import { SlOptions } from 'react-icons/sl'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { graphqlClient } from '@/clients/api';
import { VerifyUserGoogleTokenQuery } from '@/graphql/queries/user';


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
    title: 'Twitter Bluw',
    icon: <BiMoney />
  },

  {
    title: 'Profile',
    icon: <BiUser />
  },
  {
    title: 'More',
    icon: <SlOptions />
  },

]

export default function Home() {
  const HandleLoginWithGgl = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) return toast.error('google token not found')
    const { verifyGoogleToken } = await graphqlClient.request(VerifyUserGoogleTokenQuery, { token: googleToken })
    toast.success("Verified Success")
    console.log(verifyGoogleToken)
    if (verifyGoogleToken) window.localStorage.setItem('__twitter_token',verifyGoogleToken)


  }, [])
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen lg:px-56  px-0 '>
        <div className='col-span-3 ml-26 overflow-hidden pt-2 px-4'>
          <div className='text-3xl hover:bg-gray-800 rounded-full p-4 h-fit cursor-pointer transition-all w-fit ' >
            <BsTwitter />
          </div>
          <div className='mt-4 text-xl pr-4 '>
            <ul>
              {sidebarMenuItems.map((item =>
                <li className='flex w-fit justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 cursor-pointer mt-2' key={item.title}>
                  <span className='text-2xl' >{item.icon}</span>
                  <span> {item.title}</span>
                </li>
              ))}
            </ul>
            <div className='mt-3'>
              <button className='bg-[#1d9bf0] rounded-full text-lg
            w-full px-4 py-2 font-semibold' >Post</button>
            </div>
          </div>
        </div>
        <div className='col-span-6 border-x-[1px] h-screen overflow-scroll scrollbar-hide border-b-0 border-gray-600  '>
          <FeedCard />  <FeedCard /> <FeedCard /> <FeedCard /> <FeedCard /> <FeedCard /> <FeedCard /> <FeedCard /> <FeedCard />
        </div>
        <div className='col-span-3 p-5'>
          <div className='p-5 bg-slate-600  w-fit rounded-lg'>
            <h1 className='my-2 text-xl'>New to Twitter?</h1>
            <GoogleLogin onSuccess={HandleLoginWithGgl} />
          </div>
        </div>
      </div>
    </div>
  )
}
