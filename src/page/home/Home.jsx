import React from "react";
import { jsonData } from "../../json/home";
import Text_slider from "../../components/slider/Text_slider";
import SchoolImgSlider from "../../components/slider/SchoolImgSlider";
import { BiBookReader } from "react-icons/bi";

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

      <div className="out-school">
        <div className="out-school-in">
          <div className="out-schoo-eft">
            <div className="top-img">
              <img src="image/school-bulldeng.png" alt="bulldeng" />
              <img id="founder-m" src="image/faunder.png" alt="" />
            </div>
            <div className="bottom-img">
              <img id="dmimg" src="image/dm-awd.png" alt="dm-awd.png" />
              <div className="est">
                <img src="image/est-book.jpg" alt="book" />
                <h2>"Established in 2021"</h2>
              </div>
            </div>
          </div>
          <div className="out-school-right">
            <div className="about-short">
              <h2>
                {" "}
                <BiBookReader /> About Our School
              </h2>
              <p>
                The Excellent Public School World School, Methaura, Sitamarhi,
                was established in 2021 with a mission to provide quality
                education from Pre-Nursery to Class XII. Rooted in Indian values
                and a global outlook, the school follows the Excellent Learning
                System, fostering academic excellence, creativity, and holistic
                development.
              </p>
            </div>
            <div className="Affiliation-main">
              <div className="Affiliation">
                <div className="AffiliationImg">
                  <img src="image/open-book2.png" alt="affiliation" />
                </div>
                <div>
                  <h2>Affiliation Status</h2>
                  <p>CBSE Affiliation No. - 00000000</p>
                  <p>CBSE School No. - 000000</p>
                </div>
              </div>
              <div className="Affiliation">
                <div className="AffiliationImg">
                  <img src="image/book-ball2.png" alt="affiliation" />
                </div>
                <div>
                  <h2>Student Guideline</h2>
                  <p>The school intends to create a disciplined society.</p>
                </div>
              </div>
            </div>

            <div className="the-exe-pub">
              The Excellent Public School World School, Methaura is a
              CBSE-affiliated co-educational school committed to academic
              excellence and holistic development, powered by the innovative
              Excellent Learning System.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
