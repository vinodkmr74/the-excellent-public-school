import React from "react";
import School_img_slider from "../../components/slider/School_img_slider";
import { jsonData } from "../../json/home";
import Text_slider from "../../components/slider/Text_slider";

export default function Home() {
  return (
    <>
      <School_img_slider />

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
