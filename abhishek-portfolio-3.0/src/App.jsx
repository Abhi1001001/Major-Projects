import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Componenets/Navbar";
import Home from "./Componenets/Home";
import Skills from "./Componenets/Skills";
import Projects from "./Componenets/Projects";
import ContectUs from "./Componenets/ContectUs";
import Footer from "./Componenets/Footer";
import Education from "./Componenets/Education";
import Experience from "./Componenets/Experience";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContectUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
