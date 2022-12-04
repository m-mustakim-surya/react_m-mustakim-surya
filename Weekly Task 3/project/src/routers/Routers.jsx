import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Main from "../components/Main";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
