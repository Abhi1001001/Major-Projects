import { Link } from "react-router-dom";
import LogoIcon from "../Icons/icon-logo.svg?react";
import WhatsappIcon from "../Icons/icon-whatsapp2.svg?react";
import LinkedinIcon from "../Icons/icon-linkedin2.svg?react";
import EmailIcon from "../Icons/icon-mail2.svg?react";
import PhoneIcon from "../Icons/icon-phone2.svg?react";
import ChatIcon from "../Icons/chat-icon.svg?react";
import MenuIcon from "../Icons/icon-menu.svg?react";
import CloseIcon from "../Icons/close-icon.svg?react";
import DownloadIcon from "../Icons/download-icon.svg?react";
import SunIcon from "../Icons/icon-sun.svg?react";
import MoonIcon from "../Icons/icon-moon.svg?react";
import Popup from "reactjs-popup";
import ChatPopup from "./ChatPopup";
import { useEffect, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  // GSAP Animation -------------------------->
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();
  useGSAP(() => {
  tl.from('.nav-text', {
    duration: 1.2,
    y: -50,
    opacity: 0,
    stagger: 0.2})
    gsap.from('.contect-icon', {
    duration: 1.2,
    x: -50,
    opacity: -1,
    stagger: 0.2})
  })

  // dark mode toggle function ------------->
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.querySelector("body").className = "light";
      localStorage.setItem("darkMode", false);
    } else {
      setDarkMode(true);
      document.querySelector("body").className = "dark";
      localStorage.setItem("darkMode", true);
    }
  };

  // mobile menu toggle function ------->
  const mobileMenuToggle = () => {
    if (isMobileMenuOpen === false) setIsMobileMenuOpen(true);
    else setIsMobileMenuOpen(false);
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "flex";
    } else {
      mobileMenu.style.display = "none";
    }
  };
  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").className = "dark";
    } else {
      document.querySelector("body").className = "light";
    }
  }, []);
  return (
    <>
      {/* navbar section ---------------------------> */}
      <main className="w-[100vw] dark:bg-[#121212]">
        <nav className="backdrop-blur-lg max-w-7xl m-auto flex justify-between items-center px-4 font-concert text-xl sticky top-0 dark:bg-[#121212] dark:text-white">
          <Link to="/" className="w-14 outline-none">
            <LogoIcon />
          </Link>
          {/* desktop menu ----------> */}
          <div className="gap-5 hidden items-center sm:flex">
            <Link className="nav-text" to="/">Home</Link>
            <Link className="nav-text" to="/skills">Skills</Link>
            <Link className="nav-text" to="/experience">Experience</Link>
            <Link className="nav-text" to="/education">Education</Link>
            <Link className="nav-text" to="/projects">Projects</Link>
            <Link className="nav-text" to="/contect-us">Contact Us</Link>
            <button onClick={toggleDarkMode} className="nav-text">
              {darkMode ? (
                <SunIcon className="sm:w-6 text-black cursor-pointer dark:text-white" />
              ) : (
                <MoonIcon className="sm:w-6 text-black cursor-pointer" />
              )}
            </button>
            <a
              className="border-2 rounded-full lg:px-2 sm:px-2 px-2 lg:py-1 sm:py-[6px] py-2 duration-300 text-white bg-blue-600 flex active:scale-110 active:duration-0 lg:text-base sm:text-sm font-josefin"
              href="https://drive.google.com/file/d/1tSLV-r6fB4g9pEBS6DlDRRGfYZbEMcio/view?usp=sharing"
            >
              CV
              <DownloadIcon className="w-5" />
            </a>
          </div>
          {/* menu icon -------------> */}
          <div className="relative sm:hidden block">
            <div className="flex items-center gap-2">
              <button onClick={toggleDarkMode}>
                {darkMode ? (
                  <SunIcon className="w-6 text-black dark:text-white cursor-pointer" />
                ) : (
                  <MoonIcon className="w-6 text-black dark:text-white cursor-pointer" />
                )}
              </button>
              <a
                className="rounded-full lg:px-2 px-2 sm:py-[6px] sm:h-auto h-8 sm:hidden duration-300 text-white bg-blue-600 flex active:scale-110 active:duration-0 lg:text-base text-sm items-center"
                href="https://drive.google.com/file/d/1tSLV-r6fB4g9pEBS6DlDRRGfYZbEMcio/view?usp=sharing"
              >
                CV
                <DownloadIcon className="w-5" />
              </a>
              {isMobileMenuOpen ? (
                <CloseIcon
                  onClick={mobileMenuToggle}
                  className="text-gray-600 w-12"
                />
              ) : (
                <MenuIcon
                  onClick={mobileMenuToggle}
                  className="text-gray-600 w-12"
                />
              )}
            </div>
            <div
              id="mobile-menu"
              style={{ display: "none" }}
              className="h-[100vh] w-[50vw] border border-black dark:border-white rounded-xl flex-col absolute right-0 bg-[#e3e3e3] dark:bg-[#121212] gap-2 pl-4 pt-2"
            >
              <Link to="/">Home</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/education">Education</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contect-us">Contact Us</Link>
            </div>
          </div>
        </nav>

        {/* contect icon section ---------------------> */}
        <section className="fixed top-1/4 left-[2vw] flex flex-col sm:gap-5 gap-3">
          <Link
            target="_blank"
            to="https://wa.me/7235047144?text=Hello, I find you by your portfolio"
          >
            <WhatsappIcon className="contect-icon lg:w-9 sm:w-7 w-6 dark:text-white" />
          </Link>
          <Link target="_blank" to="mailto:av159593@gmail.com">
            <EmailIcon className="contect-icon lg:w-9 sm:w-7 w-6 dark:text-white" />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/"
          >
            <LinkedinIcon className="contect-icon lg:w-9 sm:w-7 w-6 dark:text-white" />
          </Link>
          <Link target="_blank" to="tel:+917235047144">
            <PhoneIcon className="contect-icon lg:w-9 sm:w-7 w-6 dark:text-white" />
          </Link>
        </section>

        {/* chat icon section ---------------------> */}
        <section className="fixed md:bottom-10 bottom-7 md:right-12 right-8 flex gap-3 z-10 justify-center items-center">
          <div className="dark:bg-white dark:text-black bg-[#121212] text-white border border-[#ffa200] text-center rounded-xl h-fit sm:px-3 px-2 py-1 sm:text-base text-sm font-josefin">
            Chat with us
          </div>
          <div className="dark:bg-white bg-[#121212] sm:w-4 w-3 sm:h-4 h-3 border-r border-t border-[#ffa200] rotate-45 absolute sm:right-[32px] right-[30px] bottom-[9px] z-10"></div>
          <div>
            <Popup trigger={<ChatIcon className="md:w-6 w-5" />} modal nested>
              {(close) => (
                <div className="modal">
                  <ChatPopup close={close} />
                </div>
              )}
            </Popup>
          </div>
        </section>
      </main>
    </>
  );
}
