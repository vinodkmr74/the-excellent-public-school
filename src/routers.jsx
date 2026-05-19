import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./page/home/Home";


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}