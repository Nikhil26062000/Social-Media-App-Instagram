import React from "react";
import HomePageHeader from "./HomePageHeader";
import HomePagePost from "./HomePagePost";
import HomePageRight from "./HomePageRight";

const HomePageMiddle = () => {
  return (
    <div className="w-[84%] h-auto  absolute left-[16%] bg-black">
    {/* right side of page start */}
      <div className="w-[300px] bg-black float-right top-0 mr-10 mt-5 max-lg:hidden">
        <HomePageRight text="Switch" url="https://api.slingacademy.com/public/sample-photos/34.jpeg"/>
        <div className="flex justify-between -mt-2 mb-2 p-1">
          <p className="text-gray-400">Suggested for you.</p>
          <p className="text-white">See All</p>
        </div>
        <HomePageRight text="follow" url="https://api.slingacademy.com/public/sample-photos/29.jpeg"/>
        <HomePageRight text="follow" url="https://api.slingacademy.com/public/sample-photos/30.jpeg"/>
        <HomePageRight text="follow" url="https://api.slingacademy.com/public/sample-photos/31.jpeg"/>
        <HomePageRight text="follow" url="https://api.slingacademy.com/public/sample-photos/32.jpeg"/>
        <HomePageRight text="follow" url="https://api.slingacademy.com/public/sample-photos/33.jpeg"/>
        <div className="flex justify-start gap-2 flex-wrap text-gray-300 text-xs ">
        <p>About</p>
        <p>Help</p>
        <p>Press</p>
        <p>Api</p>
        <p>Jobs</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Location</p>
        <p>Language</p>
        <p>Nikhil Verified</p>
      </div>
      </div>
     
        {/* right side of page ends */}
      <HomePageHeader />
    
      <section className="w-[70%] h-auto mt-16 ">
        <HomePagePost />
      </section>
    </div>
  );
};

export default HomePageMiddle;
