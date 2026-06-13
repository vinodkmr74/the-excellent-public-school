import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    const navbar = document.querySelector(".nav-bar");

    if (window.scrollY > 120) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="header-contact">
        <div className="header-contact-in">
          <div className="contant-in">
            <div className="cantante-text">
              <MdOutlineEmail className="iconContact" />

              <p>
                <a href="mailto:excellent12@gmail.com">excellent12@gmail.com</a>
              </p>
            </div>

            <div className="cantante-text">
              <MdLocationOn className="iconContact" />
              <p>
                <a
                  href="https://maps.google.com/?q=The+Excellent+Public+School+Methaura+Bishanpur+Dumra+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Post Thana, 12 Methaura, Bishanpur, Dumra, 843302
                </a>
              </p>
            </div>
          </div>

          <div className="contant-in">
            <div className="cantante-text">
              <MdOutlineWhatsapp className="iconContact" />
              <p>
                <a
                  href="https://wa.me/919930254872?text=Hello%20The%20Excellent%20Public%20School"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9930254872
                </a>
              </p>
            </div>
            <div className="cantante-text">
              <RiTwitterXFill className="iconContact" />
              <p>
                <a
                  href="https://twitter.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
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
            <img src="image/school_logo2.png" alt="" />
            <p>Excellent</p>
          </div>
          <div className={`nav-item ${menuOpen ? "show-menu" : ""}`}>
            <ul className="nav-subitem">
              <li>
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/admition" onClick={closeMenu}>
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/academic" onClick={closeMenu}>
                  Academic
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={closeMenu}>
                  Blogs
                </Link>
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
