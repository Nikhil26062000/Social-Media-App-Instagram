import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom'

import React from 'react'

const NavlinkSearch = () => {
  return (
    <div>
         <div className='flex justify-start gap-2  p-3'>
                <CiSearch className=' h-6 w-6 text-white'/>
                <NavLink to="/search" className="text-white">search</NavLink>
            </div>
    </div>
  )
}

export default NavlinkSearch