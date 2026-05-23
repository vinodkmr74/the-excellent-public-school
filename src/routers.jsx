import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./page/home/Home";
import About from "./page/about/about";
import Academic from "./page/academic/Academic";
import Admition from "./page/admition/Admition";
import Contact from "./page/contact/Contact";
import Blogs from "./page/blogs/Blogs";


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About />}/>
          <Route path="/academic" element={<Academic />} />
          <Route path="/admition" element={<Admition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}