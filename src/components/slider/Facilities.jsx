import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { jsonData } from "../../json/home";
import { Link } from "react-router-dom";

export default function Facilities() {
  return (
    <div className="Facilities-slider">
      <div className="facilities-prev">❮</div>
      <div className="facilities-next">❯</div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".facilities-prev",
          nextEl: ".facilities-next",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="Facilities-mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {jsonData.Facilities.map((item, index) => (
          <SwiperSlide key={index} className="FacilitiesSwiperSlider">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>

            <div className="Facilities-btn">
              <Link to={item.link}>Read More →</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
