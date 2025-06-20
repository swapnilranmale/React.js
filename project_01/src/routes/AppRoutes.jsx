import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
