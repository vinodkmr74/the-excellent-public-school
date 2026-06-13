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
                <Link to="/admition">Admission</Link>
              </li>
              <li>
                <Link to="/academic">Academic</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h1>Quick Links</h1>
            <ul className="footer-subitem">
              <li>
                <NavLink to="/campus">Campus</NavLink>
              </li>
              <li>
                <Link to="/missionvision">Mission Vision</Link>
              </li>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
              <p>Post Thana, 12 Methaura, Bishanpur, Dumra, Bihar 843302</p>
            </div>
          </div>
          <div className="con-map">
            <h1>location</h1>
            <div className="map-box">
              <iframe
                title="Post Thana, 12 Methaura, Bishanpur, Dumra, Bihar 843302"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8532.271568814509!2d85.47899893085643!3d26.524426516479156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecfb000f737fa9%3A0x9ceb036c95502781!2sThe%20Excellent%20public%20school!5e0!3m2!1sen!2sin!4v1781333863897!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <h2>©Copyright 2026 The Excellent Public School All Rights Reserved</h2>
      </div>
    </>
  );
}
