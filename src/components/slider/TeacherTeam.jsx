import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { jsonData } from "../../json/home";
import { Link } from "react-router-dom";

export default function TeacherTeam() {
  return (
    <>
      <div className="TeacherTeam-slider">
        <div className="facilities-prev">❮</div>
        <div className="facilities-next">❯</div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={300}
          pagination={true}
          navigation={{
            prevEl: ".facilities-prev",
            nextEl: ".facilities-next",
          }}
          autoplay={{
            delay: 2000,

            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="TeacherTeam-mySwiper"
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
          {jsonData.TeacherTeam.map((item, index) => (
            <SwiperSlide key={index} className="TeacherTeamSwiperSlider">
              <div className="retingright">
                <div className="retingright-in">99</div>
              </div>
              <img src={item.image} alt={item.title} />
              <h2>{item.name}</h2>
              <h3>{item.designation}</h3>
              <p>{item.description}</p>

              <div className="teacherRating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
