import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { jsonData } from "../json/home";
import Aos from "aos";

export default function Principal() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="principal">
        <div className="principal-in">
          <div data-aos="fade-right" className="principalImg">
            <img src="image/principal.png" alt="principal" />
          </div>
          {jsonData.principal.map((item, index) => (
            <div key={index} data-aos="fade-left" className="principaltext">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <h3>{item.principal}</h3>
              <h4>{item.school}</h4>
              <Link to={item.link}>Read More →</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
