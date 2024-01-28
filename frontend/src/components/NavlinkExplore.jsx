import React from 'react'
import { MdOutlineExplore } from "react-icons/md";
import { NavLink } from 'react-router-dom'

const NavlinkExplore = () => {
  return (
    <div>
        <div className='flex justify-start gap-2  p-3'>
                <MdOutlineExplore className='w-6 text-white h-6'/>
                <NavLink to="/explore" className="text-white">Explore</NavLink>
            </div>
    </div>
  )
}

export default NavlinkExplore