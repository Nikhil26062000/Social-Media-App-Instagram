import React from 'react'
import { BsCameraReelsFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const NavlinkReels = () => {
  return (
    <div>
          <div className='flex justify-start gap-2  p-3'>
                <BsCameraReelsFill className=' h-6 w-6 text-white'/>
                
                <NavLink to="/reels" className="text-white">Reels</NavLink>
            </div>
    </div>
  )
}

export default NavlinkReels