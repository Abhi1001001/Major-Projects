import React from "react";

// import icons from svgr library ------------------->
import { ReactComponent as HtmlIcon } from "../icons/icon-html.svg";
import { ReactComponent as CSSIcon } from "../icons/icon-css.svg";
import { ReactComponent as JavaScriptIcon } from "../icons/icon-javascript.svg";
import { ReactComponent as ReactIcon } from "../icons/icon-react.svg";
import { ReactComponent as BootStrapIcon } from "../icons/icon-bootstrap.svg";
import { ReactComponent as ReduxIcon } from "../icons/icon-redux.svg";
import { ReactComponent as MaterialUIIcon } from "../icons/icon-materialui.svg";
import { ReactComponent as GitHubIcon } from "../icons/icon-github.svg";
import { ReactComponent as TailwindCSSIcon } from "../icons/icon-tailwind.svg";
import { ReactComponent as ExpressIcon } from "../icons/icon-express.svg";
import { ReactComponent as NodeIcon } from "../icons/icon-node.svg";
import { ReactComponent as GSAPIcon } from "../icons/icon-gsap.svg";
import { ReactComponent as MongoIcon } from "../icons/icon-mongodb.svg";
import { ReactComponent as APIIcon } from "../icons/icon-api.svg";

// import nextui components ---------->
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
} from "@nextui-org/react";

// import gsap componenets --------->
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Skills(props) {
  // connect gsap plugins of scrolltrigger ---------->
  gsap.registerPlugin(ScrollTrigger);

  // gsap hook -------->
  useGSAP(() => {
    // MERN icon animation--------->
    gsap.from(".iconRef1", {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scrollRef1",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
      },
    });
    // framework icon animation ------>
    gsap.from(".iconRef2", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scrollRef2",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
      },
    });
    // other skills animation ------->
    gsap.from(".iconRef3", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scrollRef3",
        scroller: "body",
        start: "top 90%",
        end: "top 30%",
      },
    });
  });

  return (
    <>
      <section className={` p-3 ${props.darkMode ? "dark bg-[#18181b]" : ""}`}>
        <Card
          shadow="lg"
          className="max-w-screen-2xl dark:border-[#3D4852] dark:border-1 m-auto"
        >
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-josefin text-2xl font-bold">My Skills</p>
            </div>
          </CardHeader>

          <Divider className="dark:bg-[#3D4852" />

          <CardBody className="card-body-skills overflow-y-hidden flex min-h-[70vh] xl:gap-20 lg:gap-10 md:gap-6 gap-4 font-josefin text-xl font-medium xl:px-32 lg:px-12 md:px-6 px-3">
            {/* MERN Stack ------------> */}
            <div className="scrollRef1 flex md:flex-row flex-col lg:space-x-12 md:space-x-8 items-center">
              <p className="whitespace-nowrap">MERN STACK</p>
              <Divider className="dark:bg-[#3D4852] md:hidden block" />
              <div className="flex flex-row items-center justify-center lg:space-x-12 md:space-x-8 space-x-6">
                <div className="iconRef1 text-center md:max-w-36 max-w-24 text-[#48a248]">
                  <MongoIcon className="w-full md:hover:scale-125 md:duration-700" />
                  M
                </div>
                <div className="iconRef1 text-center md:max-w-36 max-w-24">
                  <ExpressIcon className="w-full md:hover:scale-125 md:duration-700" />
                  E
                </div>
                <div className="iconRef1 text-center md:max-w-36 max-w-24 text-[#357a89]">
                  <ReactIcon className="w-full md:hover:scale-125 md:duration-700" />
                  R
                </div>
                <div className="iconRef1 text-center md:max-w-36 max-w-24 text-[#21a366]">
                  <NodeIcon className="w-full md:hover:scale-125 md:duration-700" />
                  N
                </div>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852] md:hidden block" />

            {/* Frameworks ---------------> */}
            <div className="scrollRef2 flex md:flex-row flex-col lg:space-x-12 md:space-x-8 items-center">
              <p>FRAMEWORK</p>
              <Divider className="dark:bg-[#3D4852] md:hidden block" />
              <div className="flex flex-row justify-center items-center lg:space-x-12 md:space-x-8 space-x-6">
                <div className="iconRef2 text-center md:max-w-36 max-w-16 md:text-md text-sm text-[#00acc1]">
                  <TailwindCSSIcon className="w-full md:hover:scale-125 md:duration-700" />
                  TailwindCSS
                </div>
                <div className="iconRef2 text-center md:max-w-36 max-w-16 md:text-md text-sm whitespace-nowrap text-[#6c19ff]">
                  <BootStrapIcon className="w-full md:hover:scale-125 md:duration-700" />
                  BootStrap
                </div>
                <div className="iconRef2 text-center md:max-w-36 max-w-16 md:text-md text-sm whitespace-nowrap text-[#29b6f6]">
                  <MaterialUIIcon className="w-full md:hover:scale-125 md:duration-700" />
                  MaterialUI
                </div>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852] md:hidden block" />

            {/* Other ---------------> */}
            <div className="scrollRef3 flex md:flex-row flex-col lg:space-x-12 md:space-x-8 items-center">
              <p className="whitespace-nowrap">OTHER SKILLS</p>
              <Divider className="dark:bg-[#3D4852] md:hidden block" />
              <div className="icon3 flex flex-row md:flex-nowrap flex-shrink-0 flex-wrap justify-center items-center lg:space-x-12 md:space-x-8 space-x-6">
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm text-[#e7a42b]">
                  <HtmlIcon className="w-full md:hover:scale-125 md:duration-700" />
                  HTML
                </div>
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm text-[#0277BD]">
                  <CSSIcon className="w-full md:hover:scale-125 md:duration-700" />
                  CSS
                </div>
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm text-[#ffd600]">
                  <JavaScriptIcon className="w-full md:hover:scale-125 md:duration-700" />
                  JavaScript
                </div>
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm">
                  <ReduxIcon className="w-full md:hover:scale-125 md:duration-700" />
                  Redux-Saga
                </div>
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm">
                  <GitHubIcon className="w-full md:hover:scale-125 md:duration-700" />
                  Github
                </div>
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm">
                  <APIIcon className="w-full md:hover:scale-125 md:duration-700" />
                  REST-API
                </div>
                <div className="iconRef3 text-center md:max-w-36 max-w-20 md:text-md text-sm text-[#52d654]">
                  <GSAPIcon className="w-full md:hover:scale-125 md:duration-700" />
                  GSAP
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
