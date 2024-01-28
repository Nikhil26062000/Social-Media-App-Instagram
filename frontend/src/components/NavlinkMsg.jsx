import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

const NavlinkMsg = () => {
  return (
    <div>
         <div className='flex justify-start gap-2  p-3'>
                <FaRegMessage className='w-6  text-white h-6'/>
                <NavLink to="/message" className="text-white">Message</NavLink>
            </div>
    </div>
  )
}

export default NavlinkMsg