import React, { useEffect, useRef, useState } from "react";
import { jsonData } from "../../json/home";
import Text_slider from "../../components/slider/Text_slider";
import SchoolImgSlider from "../../components/slider/SchoolImgSlider";
import { BiBookReader } from "react-icons/bi";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import ActivitiesNo from "../../components/ActivitiesNo";
import Facilities from "../../components/slider/Facilities";
import Principal from "../../components/Principal";
import NoticeBord from "../../components/NoticeBord";
import { IoIosEye } from "react-icons/io";
import { GiBullseye } from "react-icons/gi";
import { PiTriangleDashedFill } from "react-icons/pi";
import Btn from "../../components/Btn";
import { FaPlay, FaPause } from "react-icons/fa";
import Gallery from "../../components/Gallery";
import TeacherTeam from "../../components/slider/TeacherTeam";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  const videoRef = useRef(null);

  const handleEnded = () => {
    videoRef.current.load();
    setIsPlaying(false);
  };

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

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
          <div data-aos="fade-right" className="out-schoo-eft">
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

          <div data-aos="fade-left" className="out-school-right">
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

            <div className="home-about-btn">
              <Link to="/about">Explore Our School →</Link>
            </div>
          </div>
        </div>
      </div>

      <ActivitiesNo />

      <div className="home-Facilities">
        <div className="home-Facilities-in">
          <div className="home-Facilities-heading">
            <h3>
              <BiBookReader /> Our Facilities
            </h3>
            <h2>Facilities At a Glance</h2>
            <p>
              The Excellent Public School offers a wide range of modern
              facilities to support students' academic, spiritual, and social
              growth.
            </p>
          </div>
          <div data-aos="fade-in" className="facilities-slider">
            <Facilities />
          </div>
        </div>
      </div>

      <Principal />

      <div className="homemissionVision">
        <div className="homemissionVision-in">
          <div data-aos="fade-right" className="NoticebordBox">
            <NoticeBord />
          </div>
          <div data-aos="fade-left" className="homemissionVisionText">
            <h3>
              {" "}
              <BiBookReader /> The Excellent Public School{" "}
            </h3>
            <h2>
              <span>Our</span> Mission <span>Our</span> Vision
            </h2>

            {jsonData.homeMissionVision.map((item, index) => (
              <div key={index}>
                {item.id === 1 && (
                  <>
                    <h4>
                      {" "}
                      <GiBullseye id="misIcon" /> {item.title}{" "}
                    </h4>
                    <p>{item.text}</p>
                  </>
                )}

                {item.id === 2 && (
                  <>
                    <h4>
                      {" "}
                      <GiBullseye id="misIcon" /> {item.title}{" "}
                    </h4>
                    <p>{item.text}</p>
                  </>
                )}

                {item.id === 3 && (
                  <>
                    <h4>
                      {" "}
                      <GiBullseye id="misIcon" /> {item.title}{" "}
                    </h4>
                    <p>{item.text}</p>
                  </>
                )}
              </div>
            ))}
            <div className="missionBtn">
              <Btn btnname="Mission Vision → " link="/missionvision" />
            </div>
          </div>
        </div>
      </div>

      <div className="homevideo">
        <div className="homevideo-in">
          <div data-aos="fade-right" className="videoleft">
            <h3>
              {" "}
              <BiBookReader /> Latest Video
            </h3>
            <h2>Our campus information</h2>
            <p>
              School Campus Area: 0000 Sq. Metres No. and size of the class
              rooms: 00.00Sq. Mt Area of play ground: 0000 sq. mtrs approx.
            </p>
            <div className="missionBtn">
              <Btn btnname="Read More → " link="/campus" />
            </div>
          </div>
          <div data-aos="fade-left" className="videoright">
            <video
              ref={videoRef}
              poster="/image/faunder.png"
              onPlay={() => {
                setIsPlaying(true);
                setShowBtn(false);
              }}
              onPause={() => {
                setIsPlaying(false);
                setShowBtn(true);
              }}
              onClick={() => {
                if (isPlaying) {
                  setShowBtn(true);
                }
              }}
              controls
              playsInline
              muted
              onEnded={handleEnded}
            >
              <source
                src="/video/The Excellent Public School School, Methaura (1).mp4"
                type="video/mp4"
              />
            </video>
            {showBtn && (
              <button className="play-btn" onClick={toggleVideo}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="homeGallery">
        <div className="homeGallery-in">
          <div className="homeGalleryText">
            <h3>
              <BiBookReader /> NEW Event The Excellent public School
            </h3>
            <h2>Our School's Latest Events & Activities Gallery</h2>
            <p>
              Explore our vibrant school gallery showcasing student
              achievements, events, and memorable moments at our amazing school!
            </p>
            <div className="missionBtn">
              <Btn btnname="Our Gallery → " link="/blogs" />
            </div>{" "}
          </div>
          <div data-aos="fade-in" className="homeGalleryImgage">
            <Gallery limit={8} />
          </div>
        </div>
      </div>

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
            <div className="missionBtn">
              <Btn btnname="Read more → " link="/about" />
            </div>
          </div>
          <div data-aos="fade-right" className="TeachingTeamSlider">
            <TeacherTeam />
          </div>
        </div>
      </div>

      <Link
        to="https://wa.me/919504809748?text=Hello%20The%20Excellent%20Public%20School"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img src="image/whatAppImage1.png" alt="WhatsApp" />
      </Link>
    </>
  );
}
