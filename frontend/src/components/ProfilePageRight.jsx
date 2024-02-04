import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import { IoIosSettings } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import Footer from "./Footer";
import DummyProfPics from "./DummyProfPics";

const ProfilePageRight = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className="absolute bg-black w-[84%] h-auto left-[16%]">
      {/* Profile pic section */}
      <div className="w-[100%] flex justify-center h-auto border border-r-0 border-t-0 border-l-0 border-black p-5 ">
        {/* Image upload  */}
        <div className="w-[20%]  flex justify-center p-5 border border-r-0 border-t-0 border-l-0 border-gray-600">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden  outline-none bg-gray-300 "></div>
        </div>
        {/* profile description */}
        <div className="w-[30%] flex flex-col justify-start pt-5 gap-4 text-white border border-r-0 border-t-0 border-l-0 border-gray-600">
          {/* first row */}
          <div className="w-[100%] flex justify-between items-center gap-1">
            <p className="text-xl">User xyz</p>
            <LogoutButton text="edit profile" />
            <LogoutButton text="view archive" />
            <p className="text-3xl">
              <IoIosSettings />
            </p>
          </div>
          {/* second row */}
          <div className="w-[100%] flex justify-start gap-5">
            <p>
              0 <spam>post</spam>
            </p>
            <p>
              1 <spam>follower</spam>
            </p>
            <p>
              5 <spam>followings</spam>
            </p>
          </div>
        </div>
      </div>

      {/* uploaded Images section */}

      <section className="w-[100%] h-[100vh]  flex flex-col justify-start items-center ">
        <div className="w-[50%] flex justify-center gap-20  text-white">
          <div className="flex justify-center items-center gap-2 text-sm font-semibold">
            <MdInsertPhoto />
            POST
          </div>
          <div className="flex justify-center items-center gap-2 text-sm font-semibold">
            <IoSaveOutline />
            SAVED
          </div>
          <div className="flex justify-center items-center gap-2 text-sm font-semibold">
            <IoIosPricetag />
            TAGGED
          </div>
        </div>
        {isEmpty && (
          <>
            
            <div className="w-[50%] pt-[80px] flex flex-col items-center text-white pb-16 bg-black">
              <p className="text-6xl">
                <MdPhotoCamera />
              </p>
              <h1 className="text-2xl pt-3 font-extrabold">Share Photos</h1>
              <p className="font-medium pt-2">
                When you share photos, they will appear on your profile.
              </p>
              <p className="pt-3 text-blue-400 font-semibold">
                Share your first photo
              </p>
            </div>
          </>
        )}

        {!isEmpty && <DummyProfPics />}

       
        <Footer />
      </section>
    </div>
  );
};

export default ProfilePageRight;
