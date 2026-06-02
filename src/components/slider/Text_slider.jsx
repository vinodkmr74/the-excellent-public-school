import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FaGraduationCap } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";
import { RiUser2Fill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Text_slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        speed={5000}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 1000,

          disableOnInteraction: false,
        }}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className="textmySwiper"
      >
        <SwiperSlide className="textswiper-slide">
          <FaGraduationCap id="slider-icon" />
          <p>QUALITY EDUCATION</p>
        </SwiperSlide>
        <SwiperSlide className="textswiper-slide">
          <GiOpenBook id="slider-icon" />

          <p>EXPERIENCED FACULTY</p>
        </SwiperSlide>
        <SwiperSlide className="textswiper-slide">
          <RiUser2Fill id="slider-icon" />
          <p>HOLISTIC DEVELOPMENT</p>
        </SwiperSlide>
        <SwiperSlide className="textswiper-slide">
          <GiTrophyCup id="slider-icon" />
          <p>BRIGHT FUTURE</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
