import React from 'react'
import HomePageLeft from '../components/HomePageLeft'
import HomePageMiddle from '../components/HomePageMiddle'
import HomePageRight from '../components/HomePageRight'
import { IoMdHome } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";


const HomePage = () => {
  return (
   
       <div className='flex flex-col' >
       
        <HomePageLeft/>
        <HomePageMiddle/>
        {/* for mobile */}
        <div className=' fixed bottom-0 w-[100%] flex justify-between flex-wrap text-2xl py-4 px-3 text-white border border-t-2 border-l-0 border-r-0 border-b-0 border-gray-600 bg-black md:hidden'>
        <IoMdHome/>
        <FaRegMessage/>
        <MdOutlineExplore/>
        <BsCameraReelsFill/>
        
        <CiSearch/>
        <FaUserCircle/>
        
        </div>
    
    </div>
   
  )
}

export default HomePage