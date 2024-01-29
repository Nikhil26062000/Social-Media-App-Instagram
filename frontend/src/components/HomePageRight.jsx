import React from 'react'

const HomePageRight = ({text,url}) => {
  return (
    <div className="p-1">

<div className="w-[100%]  flex justify-start">
          {/* left side flex */}
          <div className="w-[80%]  flex justify-start gap-3">
            {/* first div */}
            <div className="w-10 h-10 rounded-full overflow-hidden outline-none ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={url} // Replace with the URL of your image
                alt="Profile"
              />
            </div>
            {/* second div */}
            <div className=" text-white">
              <h3>User Profile</h3>
              <h6 className="text-xs text-gray-400">Suggested for you</h6>
            </div>
            {/* third div */}
            <h4 className=" text-white">1d</h4>
          </div>
          {/* rightside */}
          <div className="w-[20%] h-[65px]  flex justify-end items-center text-blue-500">
           {text}
          </div>
        </div>
    </div>
  )
}

export default HomePageRight