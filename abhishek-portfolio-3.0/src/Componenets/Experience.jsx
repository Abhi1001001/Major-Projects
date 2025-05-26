import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceIcon from "../Icons/icon-experience.svg?react";

export default function Experience() {
  // GSAP Animation -------------------------->
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".ex-box1", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".ex-box1",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".ex-box2", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".ex-box2",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
  });
  return (
    <>
      <div className="max-w-7xl m-auto font-josefin p-2">
        <div className="flex sm:flex-row flex-col items-center justify-evenly border border-black rounded-xl lg:px-4 py-20 sm:gap-0 gap-5 dark:border-white overflow-hidden">
          {/* Calvem --------------> */}
          <section className="ex-box1 lg:max-w-[430px] sm:max-w-[40vw] max-w-[80vw] lg:max-h-64 sm:h-[300px]  rounded-xl p-4 shadow-[inset_0_4px_10px_rgba(0,100,255,0.5)] dark:text-white dark:shadow-[inset_0_4px_10px_rgba(255,253,0,0.5)]">
            <ExperienceIcon className="lg:w-12 sm:w-14 w-10 my-2" />
            <h2 className="text-xl font-semibold">Calvem Energy Pvt. Ltd.</h2>
            <span className="text-sm">Apr 2023 - Apr 2024</span>
            <p>Intren as a Testing Engineer in electronics field</p>
          </section>
          {/* CollegeDekho.com --------------> */}
          <section className="ex-box2 lg:max-w-[430px] sm:max-w-[40vw] max-w-[80vw] lg:max-h-64 sm:h-[300px] rounded-xl p-4 shadow-[inset_0_4px_10px_rgba(0,100,255,0.5)] dark:text-white dark:shadow-[inset_0_4px_10px_rgba(255,253,0,0.5)]">
            <ExperienceIcon className="lg:w-12 sm:w-14 w-10 my-2" />
            <h2 className="text-xl font-semibold">CollegeDekho.com</h2>
            <span className="text-sm">Jan 2025 - Present</span>
            <p>Intren as a Front-end Developer (HTML, CSS, JS)</p>
          </section>
        </div>
      </div>
    </>
  );
}
