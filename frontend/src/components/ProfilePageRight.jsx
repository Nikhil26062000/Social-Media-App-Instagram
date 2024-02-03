import React from 'react'
import LogoutButton from './LogoutButton'
import { IoIosSettings } from "react-icons/io";

const ProfilePageRight = () => {
  return (
    <div className="absolute bg-slate-600 w-[84%] h-[100%] left-[16%]">
    {/* Profile pic section */}
        <div className="w-[100%] flex justify-center h-[300px] gap-10">
            {/* Image upload  */}
            <div className="w-[20%] bg-pink-500">

            </div>
          {/* profile description */}
            <div className="w-[30%] flex flex-col justify-start pt-2 gap-4 text-white">
            {/* first row */}
                <div className="w-[100%] flex justify-between items-center">
                   <p className='text-xl'>User xyz</p>
                    <LogoutButton/>
                    <LogoutButton/>
                   <p className="text-3xl"><IoIosSettings/></p> 
                    
                </div>
            {/* second row */}
                <div className="w-[100%] flex justify-between">
                    <p>0 <spam>post</spam></p>
                    <p>1 <spam>follower</spam></p>
                    <p>5 <spam>followings</spam></p>
                    
                    

                </div>
                
            </div>
        </div>
       
    </div>
  )
}

export default ProfilePageRight