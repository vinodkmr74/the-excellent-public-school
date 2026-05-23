import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footbg"></div>
        <div className="footer-in">
          <div className="footer-item">
            <h1>Explore Our School</h1>
            <ul className="footer-subitem">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/admition">Admition</Link>
              </li>
              <li>
                <Link to="/academic">Academic</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="contant-item">
            <h1>Contact</h1>
            <div className="contant-item-in">
              <MdOutlineEmail id="icon-con1" />
              <p>excellent@12gmail.com</p>
            </div>
            <div className="contant-item-in">
              <FaWhatsapp id="icon-con2" />
              <p>9930254872</p>
            </div>
            <div className="contant-item-in">
              <MdLocationOn id="icon-con3" />
              <p>sitamarhi</p>
            </div>
          </div>

          <div className="con-map">
            <h1>location</h1>
            <div className="map-box">
              <iframe
                title="IThum Tower Location"
                src="https://www.google.com/maps?q=IThum+Tower+Sector+62+Noida&output=embed"
                width="100%"
                height="250"
                style={{ }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
