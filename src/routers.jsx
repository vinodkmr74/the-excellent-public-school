import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Academic from "./page/academic/Academic";
import Admition from "./page/admition/Admition";
import Contact from "./page/contact/Contact";
import Blogs from "./page/blogs/Blogs";
import Home from "./page/home/Home";
import About from "./page/about/About";
import MissionVision from "./page/about/MissionVision";
import Facilities from "./components/slider/Facilities";
import FacilitieAll from "./page/about/FacilitieAll";
import Campus from "./page/about/Campus";


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/academic" element={<Academic />} />
          <Route path="/admition" element={<Admition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/missionvision" element={<MissionVision />}/>
          <Route path="/facilities" element={<FacilitieAll />}/>
          <Route path="/campus" element={<Campus />}/>

          

        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}