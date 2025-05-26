import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import EnterIcon from "../Icons/enter-icon.svg?react";
import ContectUs from "./ContectUs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Experience from "./Experience";

export default function Home() {

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
      <main className="w-[100vw] dark:bg-[#121212]">
        <section className="max-w-7xl m-auto p-2">
          <div className="flex items-center justify-between rounded-lg border border-black dark:border-white lg:py-10 sm:py-8 lg:px-20 sm:px-16 px-6">
            <section className="sm:w-3/6 font-josefin m-auto sm:py-0 py-40">
              <h1 className="hero-text lg:text-4xl sm:text-2xl font-bold text-3xl dark:text-white text-center sm:text-left">Abhishek Vishwakarma</h1>
              <h2 className="hero-text lg:text-2xl sm:text-lg text-base whitespace-nowrap dark:text-white text-center sm:text-left">I'm a MERN Stack Developer</h2>
              <p className="hero-text text-justify lg:text-base sm:text-sm hidden sm:block dark:text-white">
                I'm a dedicated full-stack developer with a passion for creating
                innovative digital solutions.I aim to contribute to a dynamic
                team, drive innovation, and continuously enhance my expertise in
                front-end technologies. Eager to contribute to projects that
                prioritize user experience and performance, while staying
                up-to-date with the latest industry trends and best practices.
              </p>
              <div className="hero-text text-center md:text-left">
                <button className="border-2 rounded-full lg:px-3 sm:px-2 px-2 lg:py-2 sm:py-[6px] py-2 my-2 mx-auto sm:mx-0 duration-300 text-white bg-blue-600 flex active:scale-110 active:duration-0 lg:text-base sm:text-sm">
                About Me
                <EnterIcon/>
              </button>
              </div>
            </section>
            <section className="hero-img lg:max-w-[400px] sm:max-w-[350px] hidden sm:block">
              <img src="./images/portfolio-img2.png" alt="loading..." />
            </section>
          </div>
        </section>
        <h1 className="dark:text-white text-center font-josefin sm:text-2xl text-xl">My Skills</h1>
        <Skills />
        <h1 className="dark:text-white text-center font-josefin sm:text-2xl text-xl">My Projects</h1>
        <Projects />
        <h1 className="dark:text-white text-center font-josefin sm:text-2xl text-xl">My Experience</h1>
        <Experience/>
        <h1 className="dark:text-white text-center font-josefin sm:text-2xl text-xl">My Education</h1>
        <Education/>
        <h1 className="dark:text-white text-center font-josefin sm:text-2xl text-xl">Contect Form</h1>
        <ContectUs/>
      </main>
    </>
  );
}
