import React from 'react'
import LogoutButton from './LogoutButton'
import { IoIosSettings } from "react-icons/io";

const ProfilePageRight = () => {
  return (
    <div className="absolute bg-black w-[84%] h-[100%] left-[16%]">
    {/* Profile pic section */}
        <div className="w-[100%] flex justify-center h-[250px] border border-r-0 border-t-0 border-l-0 border-black p-5 ">
            {/* Image upload  */}
            <div className="w-[20%]  flex justify-center p-5 border border-r-0 border-t-0 border-l-0 border-gray-600">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden  outline-none bg-gray-300 ">
            
           
          </div>
            </div>
          {/* profile description */}
            <div className="w-[30%] flex flex-col justify-start pt-5 gap-4 text-white border border-r-0 border-t-0 border-l-0 border-gray-600">
            {/* first row */}
                <div className="w-[100%] flex justify-between items-center">
                   <p className='text-xl'>User xyz</p>
                    <LogoutButton text="edit profile"/>
                    <LogoutButton text="view archive"/>
                   <p className="text-3xl"><IoIosSettings/></p> 
                    
                </div>
            {/* second row */}
                <div className="w-[100%] flex justify-start gap-5">
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