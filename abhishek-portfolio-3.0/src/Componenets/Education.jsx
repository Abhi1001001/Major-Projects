import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EducationIcon from "../Icons/icon-education.svg?react";

export default function Education() {
  // GSAP Animation -------------------------->
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".edu-text", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".edu-text",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      }
    });
    gsap.from(".edu-box-left", {
      duration: 1,
      x: -80,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".edu-box-left",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
     gsap.from(".edu-box-right", {
      duration: 1,
      x: 80,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".edu-box-right",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
  });
  return (
    <>
      <div className="font-josefin p-2 dark:bg-[#000000]">
        <section className="max-w-7xl m-auto py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center overflow-hidden">
            {/* Left Image */}
            <div className="justify-center md:flex hidden">
              <img
                src="./images/education-img.png" // replace with your image
                alt="Education"
                className="rounded-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="edu-text text-teal-400 font-semibold uppercase tracking-wide">
                About Me
              </p>
              <h2 className="edu-text text-4xl font-bold mt-2 mb-4 text-black dark:text-white">
                My <span className="text-teal-400">Educational</span> Background
              </h2>
              <p className="edu-text text-lg dark:text-white mb-6">
                Here’s a summary of my academic journey and achievements.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="edu-box-left dark:bg-[#111] p-6 rounded-xl shadow-xl relative">
                  <div className="text-teal-400 mb-3">
                    <EducationIcon className="w-10" />
                  </div>
                  <h3 className="ms:text-xl text-lg font-semibold dark:text-white">Graduation</h3>
                  <p className="text-sm text-teal-400 mb-2">2020 - 2023</p>
                  <p className="dark:text-white text-sm">
                    I am graduate in Bachelor of Arts from an institution
                    affiliated with the Awadh University.
                  </p>
                   {/* bottom glow  */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t dark:from-[#88ffe52e] from-[#88ffe563] to-transparent rounded-xl"></div>
                </div>
                <div className="edu-box-right dark:bg-[#111] p-6 rounded-2xl shadow-xl relative">
                  <div className="text-teal-400 mb-3">
                    <EducationIcon className="w-10" />
                  </div>
                  <h3 className="sm:text-xl text-lg font-semibold dark:text-white">Diploma</h3>
                  <p className="text-sm text-teal-400 mb-2">2019 - 2022</p>
                  <p className="dark:text-white text-sm">
                    Holder of a Diploma in Electrical and Electronics
                    Engineering from the Board of Technical Education Uttar
                    Pradesh (BTEUP).
                  </p>
                   {/* bottom glow  */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t dark:from-[#88ffe52e] from-[#88ffe563] to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
