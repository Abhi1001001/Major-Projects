import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EducationIcon from "../Icons/icon-education.svg?react";

export default function Education() {
  // GSAP Animation -------------------------->
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".box1", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".box1",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".box2", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".box2",
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
          {/* gradution section --------------> */}
          <section className="box1 lg:max-w-[430px] sm:max-w-[40vw] max-w-[80vw] lg:max-h-64 sm:h-[300px]  rounded-xl p-4 shadow-[inset_0_4px_10px_rgba(0,100,255,0.5)] dark:text-white dark:shadow-[inset_0_4px_10px_rgba(255,253,0,0.5)]">
            <EducationIcon className="lg:w-12 sm:w-14 w-10 my-2" />
            <h2 className="text-xl font-semibold">Gradution</h2>
            <span className="text-sm">2020-2023</span>
            <p>
              I'm graduate in Bachelor of Arts from an institution affiliated
              with the Awadh University.
            </p>
          </section>
          {/* Diploma section --------------> */}
          <section className="box2 lg:max-w-[430px] sm:max-w-[40vw] max-w-[80vw] lg:max-h-64 sm:h-[300px] rounded-xl p-4 shadow-[inset_0_4px_10px_rgba(0,100,255,0.5)] dark:text-white dark:shadow-[inset_0_4px_10px_rgba(255,253,0,0.5)]">
            <EducationIcon className="lg:w-12 sm:w-14 w-10 my-2" />
            <h2 className="text-xl font-semibold">Diploma</h2>
            <span className="text-sm">2019-2022</span>
            <p>
              Holder of a Diploma in Electrical and Electronics Engineering from
              the Board of technical Education Uttar Pradesh (BTEUP).
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
