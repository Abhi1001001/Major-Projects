import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import EnterIcon from "../Icons/enter-icon.svg?react";
import ContectUs from "./ContectUs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Experience from "./Experience";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  // GSAP Animation -------------------------->
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".hero-text", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(".hero-img", {
      duration: 1.5,
      x: 100,
      opacity: 0,
    });
  });
  return (
    <>
      <main className="dark:bg-[#0c0c0c]">
        <section className="p-2 relative bg-gradient-to-l dark:from-[#9cfff229] from-[#9cfff2c0] via-transparent to-transparent md:h-[70vh] h-[50vh] flex justify-center items-center">
          <div className="max-w-7xl m-auto flex items-center justify-between lg:py-10 sm:py-8 lg:px-20 sm:px-16 px-6">
            <section className="sm:w-3/6 font-josefin sm:m-0 m-auto sm:py-0 text-left">
              <h1 className="hero-text lg:text-4xl sm:text-2xl font-bold text-3xl dark:text-white text-center sm:text-left">
                Abhishek Vishwakarma
              </h1>
              <h2 className="hero-text lg:text-2xl sm:text-lg text-base whitespace-nowrap dark:text-white text-center sm:text-left">
                I am a <span className="text-[#6ee5ce]">MERN Stack</span>{" "}
                Developer
              </h2>
              <p className="hero-text text-justify lg:text-base sm:text-sm hidden sm:block dark:text-white">
                I am a dedicated full-stack developer with a passion for
                creating innovative digital solutions.I aim to contribute to a
                dynamic team, drive innovation, and continuously enhance my
                expertise in front-end technologies. Eager to contribute to
                projects that prioritize user experience and performance, while
                staying up-to-date with the latest industry trends and best
                practices.
              </p>
              <div className="hero-text text-center md:text-left">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full lg:px-3 sm:px-2 px-2 lg:py-2 sm:py-[6px] py-2 my-2 mx-auto sm:mx-0 duration-300 text-white bg-[#59d0b4] flex active:scale-110 active:duration-0 lg:text-base sm:text-sm"
                >
                  About Me
                  <EnterIcon />
                </button>
              </div>
            </section>
            <section className="hero-img lg:max-w-[400px] sm:max-w-[350px] hidden sm:block">
              <img src="./images/portfolio-img2.png" alt="loading..." />
            </section>
          </div>
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ContectUs />

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative dark:bg-[#000000] dark:border-gray-700 dark:border-2 dark:text-white bg-white max-w-xl w-full mx-4 rounded-xl shadow-xl p-6 animate-scale-in">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black dark:hover:text-gray-400 text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-3">About Me</h2>

              <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                I’m a passionate Full Stack Developer with hands-on experience
                in building responsive and scalable web applications using
                React, Node.js, Express, and MongoDB. I’ve worked on real-world
                projects including full-stack e-commerce platforms, task
                management systems, and production-ready frontend applications.
              </p>

              <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                I’ve also worked as a Frontend Developer Intern at CollegeDekho,
                contributing to UI improvements and bug fixes in live production
                environments. I enjoy building clean interfaces, writing
                maintainable code, and solving real problems using modern tools
                like Tailwind CSS, Redux, and Next.js.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Tailwind",
                  "Redux",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 dark:text-black rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="/projects"
                  className="px-4 py-2 dark:bg-white dark:text-black bg-black text-white rounded-lg text-sm hover:bg-gray-800"
                >
                  View Projects
                </a>
                <a
                  href="/contact-us"
                  className="px-4 py-2 border dark:bg-transparent border-gray-300 rounded-lg text-sm hover:bg-gray-100"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
