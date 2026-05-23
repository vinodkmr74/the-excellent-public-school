import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header-contact">
        <div className="header-contact-in">
          <div className="contant-in">
            <div className="cantante-text">
              <MdOutlineEmail />
              <p>excellent@12gmail.com</p>
            </div>
            <div className="cantante-text">
              <MdLocationOn />
              <p>sitamarhi</p>
            </div>
          </div>
          <div className="contant-in">
            <div className="cantante-text">
              <MdOutlineWhatsapp />
              <p>9930254872</p>
            </div>
            <div className="cantante-text">
              <RiTwitterXFill />
              <p>twitter</p>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="nav-bar">
        <div className="nav-bar-in">
          <div className="togal-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 /> : <IoReorderThreeOutline />}
          </div>
          <div className="logo">
            <img src="image/logo13.png" alt="" />
            <p>Excellent</p>
          </div>
          <div className={`nav-item ${menuOpen ? "show-menu" : ""}`}>
            <ul className="nav-subitem">
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
          <div className="enquire">
            <button>Enquire</button>
          </div>
        </div>
      </div>
    </>
  );
}
