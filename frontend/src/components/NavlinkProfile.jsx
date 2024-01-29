import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavlinkProfile = () => {
  return (
    <div>
         <div className='flex  justify-start gap-2  p-3'>
                <FaUserCircle className=' h-6 w-6 text-white'/>
                
                <NavLink to="/profile" className="text-white">Profile</NavLink>
            </div>
    </div>
  )
}

export default NavlinkProfile