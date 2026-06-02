import React from "react";
import { jsonData } from "../../json/home";
import Text_slider from "../../components/slider/Text_slider";
import School_Img_Slider from "../../components/slider/School_Img_Slider";

export default function Home() {
  return (
    <>
      <School_Img_Slider />

      <div className="text_slider">
        <div className="text_slider_in">
          <div className="left-div"></div>
          <Text_slider />
          <div className="right-div"></div>
        </div>
      </div>
      <div className="home-content"></div>
    </>
  );
}
