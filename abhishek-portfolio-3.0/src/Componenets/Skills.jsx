import MongodbIcon from "../Icons/icon-mongodb.svg?react";
import ExpressjsIcon from "../Icons/icon-express.svg?react";
import ReactIcon from "../Icons/icon-react.svg?react";
import NodejsIcon from "../Icons/icon-node.svg?react";
import TailwindIcon from "../Icons/icon-tailwind.svg?react";
import BootstrapIcon from "../Icons/icon-bootstrap.svg?react";
import MaterialUIIcon from "../Icons/icon-materialui.svg?react";
import HTMLIcon from "../Icons/icon-html.svg?react";
import CSSIcon from "../Icons/icon-css.svg?react";
import GithubIcon from "../Icons/icon-github.svg?react";
import JavascriptIcon from "../Icons/icon-javascript.svg?react";
import ReduxIcon from "../Icons/icon-redux.svg?react";
import APIIcon from "../Icons/icon-api.svg?react";
import GSAPIcon from "../Icons/icon-gsap.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  // GSAP Animation -------------------------->
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".skills-icon", {
      duration: 2,
      y: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".skills-icon",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
  });
  return (
    <>
      <div className="max-w-7xl m-auto p-2">
        <div className="border border-black dark:border-white rounded-xl px-4 lg:py-20 sm:py-14 py-10 flex flex-col justify-center sm:items-start items-center lg:gap-4 overflow-y-hidden">
          {/* mern stack icons -------------------> */}
          <section className="font-josefin flex flex-col sm:flex-row items-center justify-center sm:gap-5 gap-2">
            <h3 className="text-center lg:text-xl sm:text-base text-sm py-2 whitespace-nowrap dark:text-white">
              MERN STACK
            </h3>
            {/* divider div -----------> */}
            <div className="sm:h-14 h-[1px] bg-black dark:bg-white sm:w-[1px] w-40"></div>
            <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 sm:gap-5">
              {/* mongodb icon ---------------> */}
              <div className="flex flex-col sm:gap-0 gap-1 justify-center items-center text-[#48a248]">
                <MongodbIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-green-600" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">M</span>
              </div>
              {/* express icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-black">
                <ExpressjsIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-black dark:border-white dark:text-white" />{" "}
                <span className="lg:text-base sm:text-sm text-xs dark:text-white">
                  E
                </span>
              </div>
              {/* react icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#357a89]">
                <ReactIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#357a89]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">R</span>
              </div>
              {/* node icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#21a366]">
                <NodejsIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#21a366]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">N</span>
              </div>
            </div>
          </section>

          {/* frameworks icons ---------------------> */}
          <section className="font-josefin flex flex-col sm:flex-row items-center justify-center sm:gap-5 gap-2">
            <h3 className="text-center lg:text-xl sm:text-base text-sm py-2 whitespace-nowrap dark:text-white">
              FRAMEWORKS
            </h3>
            {/* divider div -----------> */}
            <div className="sm:h-14 h-[1px] bg-black sm:w-[1px] w-40 dark:bg-white"></div>
            <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 sm:gap-5">
              {/* tailwind icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#00acc1]">
                <TailwindIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#5f989f]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">
                  TailwindCSS
                </span>
              </div>
              {/* bootstrap icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#6c19ff]">
                <BootstrapIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#6c19ff]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">
                  BootStrap
                </span>
              </div>
              {/* materialui icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#29b6f6]">
                <MaterialUIIcon className="skills-icon lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#29b6f6]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">
                  MaterialUI
                </span>
              </div>
            </div>
          </section>

          {/* other skills icons ---------------------> */}
          <section className="font-josefin flex flex-col sm:flex-row items-center justify-center sm:gap-5 gap-2">
            <h3 className="text-center lg:text-xl sm:text-base text-sm py-2 whitespace-nowrap dark:text-white">
              OTHER SKILLS
            </h3>
            {/* divider div -----------> */}
            <div className="sm:h-14 h-[1px] bg-black sm:w-[1px] w-40 dark:bg-white"></div>
            <div className="flex flex-row md:flex-nowrap flex-wrap items-center justify-center gap-5 lg:gap-10 sm:gap-5">
              {/* html icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#e7a42b]">
                <HTMLIcon className="skills-icon sm:p-0 p-1 lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#e7a42b]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">HTML</span>
              </div>
              {/* css icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#0277BD]">
                <CSSIcon className="skills-icon sm:p-0 p-1 lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#0277BD]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">CSS</span>
              </div>
              {/* js icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#ffd600]">
                <JavascriptIcon className="skills-icon sm:p-0 p-1 lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#ffd600]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">
                  JavaScript
                </span>
              </div>
              {/* redux icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center">
                <ReduxIcon className="skills-icon sm:p-0 p-1 lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-black dark:border-white dark:text-white" />{" "}
                <span className="lg:text-base sm:text-sm text-xs dark:text-white">
                  Redux-Saga
                </span>
              </div>
              {/* github icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center">
                <GithubIcon className="skills-icon sm:p-0 p-1 lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-black dark:border-white dark:text-white" />{" "}
                <span className="lg:text-base sm:text-sm text-xs dark:text-white">
                  Github
                </span>
              </div>
              {/* api icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center">
                <APIIcon className="skills-icon sm:p-0 p-1 lg:w-20 sm:w-16 w-8 sm:border-b-4 border-b-2 border-black dark:border-white dark:text-white" />{" "}
                <span className="lg:text-base sm:text-sm text-xs whitespace-nowrap dark:text-white">
                  REST-API
                </span>
              </div>
              {/* gsap icon ---------------> */}
              <div className="flex flex-col justify-center sm:gap-0 gap-1 items-center text-[#52d654]">
                <GSAPIcon className="skills-icon sm:p-0 p-1 lg:w-[75px] sm:w-16 w-8 sm:border-b-4 border-b-2 border-[#52d654]" />{" "}
                <span className="lg:text-base sm:text-sm text-xs">GSAP</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
