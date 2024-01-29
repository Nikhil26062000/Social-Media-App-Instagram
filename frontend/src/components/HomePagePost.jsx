import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import { TbLocationShare } from "react-icons/tb";
import { BsFillSave2Fill } from "react-icons/bs";

const HomePagePost = () => {

  const [post,setPost] = useState()
  useEffect(() => {
    getData();
    
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos?limit=100",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        // Check if the response status is OK
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.photos);
      setPost(data.photos);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  return (
    <div className="xl:ml-16 max-xl:ml-0 ">

{post &&
        post.map((ele, index) => (
          <div className="w-[466px]  bg-black my-20 max-md:mb-10  max-md:w-[320px] max-md:my-0" key={index}>
        {/* header of the post */}
        <div className="w-[100%]  flex justify-start flex-wrap">
          {/* left side flex */}
          <div className="w-[80%]  flex justify-start flex-wrap gap-1">
            {/* first div */}
            <div className="w-14 h-14 rounded-full overflow-hidden outline-none ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={ele.url}// Replace with the URL of your image
                alt="Profile"
              />
            </div>
            {/* second div */}
            <div className="mt-2 text-white">
              <h3>User xyz</h3>
              <h6 className="text-xs">Original Profile</h6>
            </div>
            {/* third div */}
            <h4 className="mt-2 text-white">1d</h4>
          </div>
          {/* rightside */}
          <div className="w-[20%] h-[65px]  flex justify-end items-center flex-wrap">
            <BsThreeDots />
          </div>
        </div>
        {/* body of the post */}
        <div className="w-[466px] max-md:w-[320px] mt-2 ">
          <img
            src={ele.url}
            alt="post"
            className="w-[100%] h-[100%] object-cover rounded-sm"
          />
        </div>
        {/* footer of the post */}

        <div className="w-[100%] cursor-pointer flex justify-start flex-wrap pt-2">
          {/* left side flex */}
          <div className="w-[80%] py-2 flex justify-start items-center gap-4 flex-wrap text-2xl">
            <FcLike className="text-white" />

            <FaComment className="text-white" />
            <TbLocationShare className="text-white" />
          </div>
          {/* rightside */}
          <div className="w-[20%] flex justify-end items-center flex-wrap">
            <BsFillSave2Fill className="text-white" />
          </div>
        </div>
        {/* footer description */}
        <div className="flex flex-col justify-start flex-wrap text-white border-gray-500 border-b-2 pb-5 max-md:pb-10">
          <p>11 likes</p>
          <p>{ele.description}.</p>
          <p className="text-gray-400 cursor-pointer">view all comments</p>
          <div>
            <input type="text" placeholder="Add a comment" className="bg-black text-gray-400 outline-none "/>
          </div>
        </div>
      </div>
        
        ))}
     
     
    </div>
  );
};

export default HomePagePost;
