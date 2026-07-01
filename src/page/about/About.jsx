import React, { useEffect } from "react";
import AllPageheding from "../../components/AllPageheding";
import { jsonData } from "../../json/home";
import { BiBookReader } from "react-icons/bi";
import ActivitiesNo from "../../components/ActivitiesNo";
import Aos from "aos";
import "aos/dist/aos.css";
import TeacherTeam from "../../components/slider/TeacherTeam";
import Btn from "../../components/Btn";

export default function About() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <AllPageheding
        image="image/school-bulldeng.png"
        heading="About Us"
        text="The Excellent Public School is Providing quality education, strong values, and holistic growth for a brighter future."
      />

      {jsonData.about.map((item, index) => (
        <div key={index} className="aboutpage">
          {item.id === 1 && (
            <div className="aboutpage-in">
              <div data-aos="fade-right" className="aboutImg">
                <img src={item.image} alt={item.title} />
              </div>
              <div data-aos="fade-left" className="aboutText">
                <h3>
                  {" "}
                  <BiBookReader /> {item.title}
                </h3>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div data-aos="fade-in" className="aboutActivitiesNo">
        <ActivitiesNo />
      </div>

      {jsonData.about.map((item, index) => (
        <div key={index} className="aboutpage">
          {item.id === 2 && (
            <div className="aboutpage-in">
              <div data-aos="fade-right" className="aboutImgSystem">
                <img src={item.image} alt={item.title} />
              </div>
              <div data-aos="fade-left" className="aboutText">
                <h3>
                  {" "}
                  <BiBookReader /> {item.title}
                </h3>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="TeachingTeam">
        <div className="TeachingTeam-in">
          <div data-aos="fade-left" className="TeachingTeamText">
            <h3>
              {" "}
              <BiBookReader />
              The Excellent Public School Teaching Team{" "}
            </h3>
            <h2>Meet Our Teaching Team</h2>
            <p>
              Our dedicated and experienced teachers at The Excellent Public
              School are committed to nurturing young minds, fostering
              creativity, and helping every student achieve academic excellence.
            </p>
            {/* <div className="missionBtn">
                     <Btn btnname="Read more → " link="/about" />
                   </div> */}
          </div>
          <div data-aos="fade-right" className="TeachingTeamSlider">
            <TeacherTeam />
          </div>
        </div>
      </div>
    </>
  );
}
