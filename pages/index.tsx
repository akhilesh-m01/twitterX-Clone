import React from 'react';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import {BiHash, BiHomeCircle, BiMoney, BiUser} from 'react-icons/bi'
import {Inter} from "next/font/google"
import FeedCard from '@/components/FeedCard';
import { SlOptions } from 'react-icons/sl';


interface TwitterSidebarButton{
  title:string,
  icon:React.ReactNode
}

const SidebarMenuItems:TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle/>
  },
  {
    title: 'Explore',
    icon: <BiHash/>
  },
  {
    title: 'Notifications',
    icon: <BsBell/>
  },
  {
    title: 'Messages',
    icon: <BsEnvelope/>
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark/>
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney/>
  },
  {
    title: 'Profile',
    icon: <BiUser/>
  },
  {
    title: 'Option',
    icon: <SlOptions/>
  },
]


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-28">
          <div className='text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer translate-all'>
            <BsTwitter/>
          </div>
          <div className='mt-2 text-xl pr-4'>
            <ul>
              {
                SidebarMenuItems.map((item)=>(
                  <li className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 cursor-pointer mt-2 w-fit' key={item.title}>
                    <span className='text-3xl'>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                ))
              }
            </ul>
            <div className='mt-5 px-2'>
            <button className='bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full'>Tweet</button>
            </div> 
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/> 
        </div>
        <div className="col-span-3">rightbar</div>
      </div>
    </div>
  );
}
