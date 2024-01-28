import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import heart from "../assets/heart.png"

const NavlinkNotify = () => {
  return (
    <div>
     <div className='flex justify-start  gap-2  p-3'>
                <IoIosNotifications className=' h-6 w-6 text-white'/>
                
                <NavLink to="/search" className="text-white">Notification</NavLink>
            </div>
    </div>
  )
}

export default NavlinkNotify