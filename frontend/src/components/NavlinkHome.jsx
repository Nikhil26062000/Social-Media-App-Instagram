import React from 'react'
import { IoMdHome } from "react-icons/io";
import { NavLink } from 'react-router-dom'

const NavlinkHome = () => {
  return (
    <div>
         <div className='flex justify-start gap-2 p-3'>
                <IoMdHome className=' h-6 w-6 text-white'/>
                <NavLink to="/home" className="text-white">Home</NavLink>
            </div>
    </div>
  )
}

export default NavlinkHome