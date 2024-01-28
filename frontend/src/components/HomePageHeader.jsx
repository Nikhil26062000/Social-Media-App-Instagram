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
    <div className="mx-[120px] mt-5 bg-black">
    <Slider {...settings}>
    {images &&
        images.map((ele, index) => (
          <div className="w-10 h-20 rounded-full overflow-hidden p-2 " key={index}>
            
            <img
              className="w-[100%] h-[100%] object-cover"
              src={ele.url} // Replace with the URL of your image
              alt="Profile"
            />
          </div>
        ))}
    </Slider>
     
        </div>
    </>
  );
};

export default HomePageHeader;
