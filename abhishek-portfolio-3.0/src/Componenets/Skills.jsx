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
import NextjsIcon from "../Icons/icon-nextjs.svg?react";
import PostmanIcon from "../Icons/icon-postman.svg?react";
import VsCodeIcon from "../Icons/icon-vscode.svg?react";
import NetlifyIcon from "../Icons/icon-netlify.svg?react";
import VercleIcon from "../Icons/icon-vercle.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  // GSAP Animation -------------------------->
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();
  useGSAP(() => {
     tl.from(".skill-text", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skill-text",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      }
    });
    gsap.from(".box-1", {
      duration: 0.5,
      x: -80,
      y: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".box-section",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".box-2", {
      duration: 0.5,
      x: 80,
      y: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".box-section",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".box-3", {
      duration: 0.5,
      x: -80,
      y: 80,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".box-section",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".box-4", {
      duration: 0.5,
      x: 80,
      y: 80,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".box-section",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
  });
  return (
    <>
      <div className="p-2 dark:bg-[#000000] font-josefin">
        <section className=" py-5 px-6 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div>
              <p className="skill-text text-[#6ee5ce] font-semibold uppercase tracking-wide sm:text-md text-sm">
                Our Services
              </p>
              <h2 className="skill-text sm:text-4xl text-2xl font-bold mt-2 mb-4 dark:text-white">
                What <span className="text-[#6ee5ce]">We Do.</span>
              </h2>
              <p className="skill-text dark:text-white mb-6 sm:text-base text-sm">
                I’m a MERN Stack developer with a strong focus on front-end
                development. Over time, I’ve worked on building and maintaining
                different web applications and pages, always making sure they
                look great, run smoothly, and are easy to use.
              </p>
              <p className="skill-text dark:text-white mb-6 md:block hidden">
                I’ve had the chance to work on several projects where I combined
                creativity with clean code, delivering results that match both
                user needs and business goals.
              </p>
              <p className="skill-text dark:text-white mb-6 md:block hidden">
                Besides MERN, I also enjoy working with tools like{" "}
                <b>
                  Tailwind CSS, Bootstrap, ShadCN UI, HeroUI, GSAP, Next.js, and
                  Material UI—
                </b>
                these help me bring designs to life and make web experiences
                more interactive and modern.{" "}
              </p>
              <div className="skill-text">
              <button className="bg-[#59d0b4] px-6 py-2 rounded-full text-white hover:bg-teal-400 transition">
                View All
              </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="box-section grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="box-1 relative bg-gray-100 dark:bg-[#111] p-6 rounded-xl shadow-lg h-[250px]">
                <div className="text-teal-400 mb-4 relative h-1/2">
                  <MongodbIcon className="absolute left-[5%] top-[40%] w-10 h-10" />
                  <ExpressjsIcon className="absolute top-[5%] left-[40%] w-10 h-10" />
                  <ReactIcon className="absolute right-[5%] top-[40%] w-10 h-10" />
                  <NodejsIcon className="absolute top-[65%] left-[40%] w-10 h-10" />
                </div>
                <h3 className="sm:text-xl text-md font-semibold mb-2 dark:text-white">Mern Stack</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Builds modern, fast, and scalable web applications.{" "}
                </p>
                {/* bottom glow  */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t dark:from-[#88ffe52e] from-[#88ffe563] to-transparent rounded-xl"></div>
              </div>
              <div className="box-2 relative bg-gray-100 dark:bg-[#111] p-6 rounded-xl shadow-lg h-[250px]">
                <div className="text-teal-400 mb-4 relative h-1/2">
                  <TailwindIcon className="absolute left-[5%] top-[40%] w-10 h-10" />
                  <BootstrapIcon className="absolute top-[5%] left-[40%] w-10 h-10" />
                  <MaterialUIIcon className="absolute right-[5%] top-[40%] w-10 h-10" />
                  <NextjsIcon className="absolute top-[65%] left-[40%] w-10 h-10 dark:text-white" />
                </div>
                <h3 className="sm:text-xl text-md font-semibold mb-2 dark:text-white">Frameworks</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Enhancing web apps with modern, responsive, and scalable UI
                  frameworks.
                </p>
                 {/* bottom glow  */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t dark:from-[#88ffe52e] from-[#88ffe563] to-transparent rounded-xl sm:hidden block"></div>
              </div>
              <div className="box-3 relative bg-gray-100 dark:bg-[#111] p-6 rounded-xl shadow-lg h-[250px]">
                <div className="text-teal-400 mb-4 relative h-2/5">
                  <HTMLIcon className="absolute -left-[7px] top-[25px] w-10 h-10" />
                  <CSSIcon className="absolute -top-[13px] left-[55px] w-10 h-10" />
                  <JavascriptIcon className="absolute right-[10px] -top-[10px] w-10 h-10" />
                  <ReduxIcon className="absolute top-[60px] left-[123px] w-10 h-10" />
                  <GithubIcon className="absolute top-0 right-20 w-10 h-10" />
                  <GSAPIcon className="absolute top-[50px] left-[40px] w-10 h-10" />
                  <APIIcon className="absolute top-[60px] right-[10px] w-10 h-10 dark:text-white text-black rounded-full bg-black p-1" />
                </div>
                <h3 className="sm:text-xl text-md font-semibold mb-2 dark:text-white">Other Skills</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Proficient in HTML, CSS, JavaScript, GitHub, Redux, APIs, and
                  more for complete web solutions.
                </p>
                  {/* bottom glow  */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t dark:from-[#88ffe52e] from-[#88ffe563] to-transparent rounded-xl sm:hidden block"></div>
              </div>
              <div className="box-4 relative bg-gray-100 dark:bg-[#111] p-6 rounded-xl shadow-lg h-[250px]">
                <div className="text-teal-400 mb-4 relative h-2/5">
                  <VsCodeIcon className="absolute left-[5%] top-[40%] w-10 h-10" />
                  <PostmanIcon className="absolute top-[5%] left-[40%] w-10 h-10" />
                  <NetlifyIcon className="absolute right-[5%] top-[40%] w-10 h-10" />
                  <VercleIcon className="absolute top-[65%] left-[40%] w-8 h-8 dark:text-white text-black" />
                </div>
                <h3 className="sm:text-xl text-md font-semibold mb-2 dark:text-white">Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Experienced with VS Code, Postman, Vercel, and other modern
                  development tools.
                </p>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t dark:from-[#88ffe52e] from-[#88ffe563] to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
