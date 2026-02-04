import { Link } from "react-router-dom";
import LogoIcon from "../Icons/icon-logo.svg?react";
import WhatsappIcon from "../Icons/icon-whatsapp2.svg?react";
import LinkedinIcon from "../Icons/icon-linkedin2.svg?react";
import EmailIcon from "../Icons/icon-mail2.svg?react";
import PhoneIcon from "../Icons/icon-phone2.svg?react";
import ChatIcon from "../Icons/chat-icon.svg?react";
import DownloadIcon from "../Icons/download-icon.svg?react";
import SunIcon from "../Icons/icon-sun.svg?react";
import MoonIcon from "../Icons/icon-moon.svg?react";
import Popup from "reactjs-popup";
import ChatPopup from "./ChatPopup";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  // GSAP Animation -------------------------->
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".nav-text", {
      duration: 1.2,
      y: -50,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(".contect-icon", {
      duration: 1.2,
      x: -50,
      opacity: -1,
      stagger: 0.2,
    });
  });

  // dark mode toggle function ------------->
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.querySelector("body").className = "light";
      localStorage.setItem("darkMode", false);
    } else {
      setDarkMode(true);
      document.querySelector("body").className = "dark bg-[#121212]";
      localStorage.setItem("darkMode", true);
    }
  };

  // mobile menu toggle function ------->
  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // download pdf function------------------------>
  const downloadResume = () => {
    fetch(
      "https://drive.google.com/file/d/1yVXJbAUwdEd2XcFC7Mdmxo0iREP5Wjco/view?usp=drive_link"
    ).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Abhishek_vishwakarma_resume.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").className = "dark bg-[#121212]";
    } else {
      document.querySelector("body").className = "light";
    }
  }, [darkMode]);
  return (
    <>
      {/* navbar section ---------------------------> */}
      <nav className="backdrop-blur-lg max-w-7xl m-auto flex justify-between items-center px-4 font-concert text-xl sticky top-0 dark:text-white z-50">
        <Link to="/" className="w-14 outline-none">
          <LogoIcon className="text-[#6ee5ce]" />
        </Link>
        {/* desktop menu ----------> */}
        <div className="gap-5 hidden items-center sm:flex">
          <Link className="nav-text" to="/">
            Home
          </Link>
          <Link className="nav-text" to="/skills">
            Skills
          </Link>
          <Link className="nav-text" to="/experience">
            Experience
          </Link>
          <Link className="nav-text" to="/education">
            Education
          </Link>
          <Link className="nav-text" to="/projects">
            Projects
          </Link>
          <Link className="nav-text" to="/contact-us">
            Contact Us
          </Link>
          <button onClick={toggleDarkMode} className="nav-text">
            {darkMode ? (
              <SunIcon className="sm:w-6 text-black cursor-pointer dark:text-white" />
            ) : (
              <MoonIcon className="sm:w-6 text-black cursor-pointer" />
            )}
          </button>
          <button
            className="rounded-full lg:px-2 sm:px-2 px-2 lg:py-1 sm:py-[6px] py-2 duration-300 text-white bg-[#59d0b4] flex active:scale-110 active:duration-0 lg:text-base sm:text-sm font-josefin"
            onClick={downloadResume}
          >
            CV
            <DownloadIcon className="w-5" />
          </button>
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

            <button
              className="rounded-full lg:px-2 px-2 sm:py-[6px] sm:h-auto h-8 sm:hidden duration-300 text-white bg-[#59d0b4] flex active:scale-110 active:duration-0 lg:text-base text-sm items-center"
              onClick={downloadResume}
            >
              CV
              <DownloadIcon className="w-5" />
            </button>

            <button onClick={mobileMenuToggle}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="w-1/2 z-50 dark:border-white bg-[#e3e3e3] dark:bg-[#121212] fixed top-14 right-0">
              <div className=" pt-5 h-screen flex flex-col items-center justify-start space-y-8 text-2xl font-semibold">
              <Link
                to="/"
                onClick={mobileMenuToggle}
                className="hover:text-teal-400 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/skills"
                onClick={mobileMenuToggle}
                className="hover:text-teal-400 cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="/experience"
                onClick={mobileMenuToggle}
                className="hover:text-teal-400 cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="/education"
                onClick={mobileMenuToggle}
                className="hover:text-teal-400 cursor-pointer"
              >
                Education
              </Link>
              <Link
                to="/projects"
                onClick={mobileMenuToggle}
                className="hover:text-teal-400 cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="/contact-us"
                onClick={mobileMenuToggle}
                className="hover:text-teal-400 cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
            </div>
          )}
        </div>
      </nav>

      {/* contect icon section ---------------------> */}
      <section className="fixed top-1/4 left-[2vw] flex flex-col sm:gap-5 gap-3">
        <Link
          target="_blank"
          to="https://wa.me/7235047144?text=Hello, I find you by your portfolio"
        >
          <WhatsappIcon className="contect-icon lg:w-7 sm:w-6 w-5 dark:text-white" />
        </Link>
        <Link target="_blank" to="mailto:av159593@gmail.com">
          <EmailIcon className="contect-icon lg:w-7 sm:w-6 w-5 dark:text-white" />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/"
        >
          <LinkedinIcon className="contect-icon lg:w-7 sm:w-6 w-5 dark:text-white" />
        </Link>
        <Link target="_blank" to="tel:+917235047144">
          <PhoneIcon className="contect-icon lg:w-7 sm:w-6 w-5 dark:text-white" />
        </Link>
      </section>

      {/* chat icon section ---------------------> */}
      <section className="fixed md:bottom-10 bottom-7 md:right-12 right-8 flex gap-3 z-10 justify-center items-center">
        <div className="dark:bg-white dark:text-black bg-[#121212] text-white border border-[#59d0b4] text-center rounded-xl h-fit sm:px-3 px-2 py-1 sm:text-base text-sm font-josefin">
          Chat with us
        </div>
        <div className="dark:bg-white bg-[#121212] sm:w-4 w-3 sm:h-4 h-3 border-r border-t border-[#59d0b4] rotate-45 absolute sm:right-[32px] right-[30px] bottom-[9px] z-10"></div>
        <div>
          <Popup
            trigger={<ChatIcon className="md:w-6 w-5 text-[#59d0b4]" />}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <ChatPopup close={close} />
              </div>
            )}
          </Popup>
        </div>
      </section>
    </>
  );
}
