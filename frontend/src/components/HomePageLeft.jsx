import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

import NavlinkHome from "./NavlinkHome";
import NavlinkSearch from "./NavlinkSearch";
import NavlinkExplore from "./NavlinkExplore";
import NavlinkMsg from "./NavlinkMsg";
import NavlinkNotify from "./NavlinkNotify";
import NavlinkReels from "./NavlinkReels";
import NavlinkProfile from "./NavlinkProfile";
import { GiHamburgerMenu } from "react-icons/gi";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SatelliteIcon from "@mui/icons-material/Satellite";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

const HomePageLeft = () => {
  const [show, setShow] = useState(false);
  const {Logout} = useAuth();
  const navigate = useNavigate();
  const handleShow = () => {
    setShow(!show);
  };



    const handleLogout = () => {
     
        toast.success("Logout successful")
        Logout();
        navigate("/");

        
    }
  return (
    <div className="relative">
      {show && (
        <div className="w-[25%] bg-[#262626] h-[475px] z-50 my-32 mx-4 rounded-3xl absolute">
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            <SettingsOutlinedIcon className="mr-3" />
            Settings
          </li>
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            <SatelliteIcon className="mr-3" />
            Your Activity
          </li>
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            <BookmarkBorderOutlinedIcon className="mr-3" />
            Saved
          </li>
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            <Brightness2OutlinedIcon className="mr-3" />
            Switch Appearance
          </li>
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            <ReportGmailerrorredOutlinedIcon className="mr-3" />
            Report a Problem
          </li>
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            <span className="icons text-2xl mr-3 ">@</span>Threads
          </li>
          <li className="list-none px-4 py-4 text-white cursor-pointer">
            Switch Account
          </li>
          <span className="list-none px-4 py-4 text-white cursor-pointer" 
        onClick={handleLogout}>
            Log Out
          </span>
        </div>
      )}

      <div className="w-[23%] h-[100vh] bg-black pl-4 ">
        <div className="h-[15vh]">
          <div className="text-white mx-4 pt-7 h-16 font-bold text-xl font-mono">
            Instagram
          </div>
        </div>
        <div className="h-[70vh] flex flex-col justify-start gap-4 cursor-pointer">
          <NavlinkHome />
          <NavlinkSearch />
          <NavlinkExplore />
          <NavlinkReels />
          <NavlinkMsg />
          <NavlinkNotify />
          <NavlinkProfile />
        </div>
        <div className="h-[15vh]  flex justify-start pt-3 ">
          <div className="flex justify-start gap-2   p-3 cursor-pointer" onClick={handleShow}>
            <GiHamburgerMenu className=" h-6 w-6 text-white cursor-pointer"  />

            <span className="text-white">
              More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLeft;
