import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Educations from "./Educations";
import Resume from "./Resume";
import ContectUs from "./ContectUs";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function App() {
  const [darkMode, setDarkMode] = useState("");
  const sendData = (value)=>{
    setDarkMode(value)
  }
 
  return (
    <>
      <div>
      <BrowserRouter>
        <NavBar sendData={sendData}/>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/Skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/Projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/Educations" element={<Educations darkMode={darkMode} />} />
          <Route path="/Resume" element={<Resume darkMode={darkMode} />} />
          <Route path="/Contect-us" element={<ContectUs darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </BrowserRouter>
      </div>
    </>
  );
}
