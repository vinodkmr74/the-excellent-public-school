import React from "react";
import Gallery from "../../components/Gallery";
import AllPageheding from "../../components/AllPageheding";
import { BiBookReader } from "react-icons/bi";

export default function Blogs() {
  return (
    <>
      <AllPageheding
        image="image/bloge3.png"
        heading="Blogs"
        text="Explore the latest news, events, and insights from our school community."
      />
      
      <div className="blogstext">
         <div className="blogstext-in">
          <div className="blogestext">
          <h3><BiBookReader />  Gallery</h3>
          <h2>Our Images Bloges</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>

         </div>
      </div>
      <div className="allimagebloges">
        <Gallery imageWidth="32%" />
      </div>
    </>
  );
}
