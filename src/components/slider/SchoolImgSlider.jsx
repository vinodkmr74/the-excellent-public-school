import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import { jsonData } from "../../json/home";

export default function SchoolImgSlider() {
  return (
    <>
      <div className="slider-container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {jsonData.slider.map((item, index) => (
            <SwiperSlide key={index} className="swiperimage">
              <div className="sliderbox">
                <img src={item.image} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 
   
  <div className="typewriter-container">
      <h1>
        <Typewriter
          words={[
            "Welcome To The Excellent Public School",
            "Building Bright Futures",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={2500}
        />
      </h1>
    </div> */}
      </div>
    </>
  );
}
