import React from "react";
import { jsonData } from "../../json/home";
import Text_slider from "../../components/slider/Text_slider";
import SchoolImgSlider from "../../components/slider/SchoolImgSlider";

export default function Home() {
  return (
    <>
       <SchoolImgSlider />
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
