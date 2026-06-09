import React from "react";

export default function NoticeBord() {
  return (
    <>
      <div className="notice-board">
        <div className="notice-board-in">
          <h2>NEWS & NOTICE</h2>
          <marquee behavior="scroll" direction="left">
            <h3>The Excellent Public School Methaura, Sitamarhi</h3>
          </marquee>
          <p>"Stay Updated with the Latest News & Announcements"</p>
        </div>
        <div className="notice-information">
          <marquee
            direction="up"
            scrollamount="2"
            height="390"
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
          >
            <div className="notice-information-in">
              <h3>Admission Open 2025 - 2026

              </h3>
                                 <span className="new-badge">NEW</span>

              
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
}
