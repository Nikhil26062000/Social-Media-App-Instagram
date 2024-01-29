import React, { useEffect, useState } from "react";
  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePageHeader = () => {
  const [images, setImages] = useState();





   
  var settings = {
    infinite: true,
    autoplay: false, 
    speed: 500,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 5
  };

  var settings2 = {
    infinite: true,
    autoplay: false, 
    speed: 500,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 5
  };

  var settings3 = {
    infinite: true,
    autoplay: false, 
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  useEffect(() => {
    getData();
    console.log(images);
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos?limit=40",
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
      setImages(data.photos);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <>
    {/* header start for mobile */}
    <div className='max-md:w-[100%] bg-black fixed top-0 py-3 z-[90]  md:hidden'>
        <h1  className="text-white mx-4 font-bold text-2xl font-mono">Instagram</h1>
       </div>
       {/* header end for mobile */}


    <header className="ml-16 cursor-pointer max-xl:flex justify-center max-xl:ml-0 px-5 max-md:mt-8">
    <div className="w-[70%] mt-5 max-xl:hidden">
    <Slider {...settings}>
    {images &&
        images.map((ele, index) => (
        
         <div className="w-10 h-20 rounded-full overflow-hidden  outline-none p-2 " key={index}>
            
            <img
              className="w-[100%] h-[100%] object-cover"
              src={ele.url} // Replace with the URL of your image
              alt="Profile"
            />
          </div>
  
        ))}
    </Slider>
     
        </div>

{/* 
for tabs */}


        <div className="w-[70%] mt-5 max-xl:w-[100%] xl:hidden  max-md:hidden">
    <Slider {...settings2}>
    {images &&
        images.map((ele, index) => (
        
         <div className="w-10 h-20 rounded-full overflow-hidden  outline-none p-2 " key={index}>
            
            <img
              className="w-[100%] h-[100%] object-cover"
              src={ele.url} // Replace with the URL of your image
              alt="Profile"
            />
          </div>
  
        ))}
    </Slider>
     
        </div>
{/* 
for mobile devices */}


        <div className="mt-6 max-md:w-[100%] md:hidden  ">
    <Slider {...settings3}>
    {images &&
        images.map((ele, index) => (
        
         <div className="w-10 h-20 rounded-full overflow-hidden  outline-none p-2 " key={index}>
            
            <img
              className="w-[100%] h-[100%] object-cover"
              src={ele.url} // Replace with the URL of your image
              alt="Profile"
            />
          </div>
  
        ))}
    </Slider>
     
        </div>
        </header>
    </>
  );
};

export default HomePageHeader;
