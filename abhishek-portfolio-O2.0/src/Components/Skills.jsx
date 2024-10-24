import React from "react";
import { ReactComponent as HtmlIcon } from "../icons/html.svg";
import { ReactComponent as CSSIcon } from "../icons/css.svg";
import { ReactComponent as JavaScriptIcon } from "../icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as BootStrapIcon } from "../icons/bootstrap.svg";
import { ReactComponent as ReduxIcon } from "../icons/redux.svg";
import { ReactComponent as MaterialUIIcon } from "../icons/material-ui.svg";
import { ReactComponent as GitHubIcon } from "../icons/icon-github.svg";
import { ReactComponent as TailwindCSSIcon } from "../icons/tailwind.svg";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


export default function Skills(props) {
  gsap.registerPlugin(ScrollTrigger);
useGSAP(()=>{
  gsap.from('.iconRef1', {
    y : -40,
    opacity : 0,
    duration : 1,
    delay : 0.3,
    stagger : 0.3,
    scrollTrigger : {
      trigger : ".iconRef1",
      scroller : "body",
      start : "top 75%",
    }
    
    
  });
  gsap.from('.iconRef2', {
    y : 40,
    opacity : 0,
    duration : 1,
    delay : 0.3,
    stagger : 0.3,
    scrollTrigger : {
      trigger : ".iconRef2",
      scroller : "body",
      start : "top 97%",
    }
  })
})

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
          <CardBody className="flex flex-row flex-wrap min-h-[70vh] xl:gap-20 lg:gap-10 md:gap-6 gap-4 font-josefin text-xl font-medium xl:px-40 lg:px-12 md:px-6 px-3">

            <div className="iconRef1 lg:w-36 md:w-32 w-28 m-auto text-center rounded-xl dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <HtmlIcon className="hover:scale-150 duration-700" />
              HTML
            </div>
            <div className="iconRef1 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <CSSIcon className="hover:scale-150 duration-700" />
              CSS
            </div>
            <div className="iconRef1 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <JavaScriptIcon className="hover:scale-150 duration-700" />
              JavaScript
            </div>
            <div className="iconRef1 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <ReactIcon className="hover:scale-150 duration-700" />
              React
            </div>
            <div className="iconRef1 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <ReduxIcon className="hover:scale-150 duration-700" />
              Redux-Saga
            </div>
            <div className="iconRef2 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <GitHubIcon className="hover:scale-150 duration-700" />
              GitHub
            </div>
            <div className="iconRef2 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <BootStrapIcon className="hover:scale-150 duration-700" />
              BootStrap
            </div>
            <div className="iconRef2 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <MaterialUIIcon className="hover:scale-150 duration-700" />
              MaterialUI
            </div>
            <div className="iconRef2 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <TailwindCSSIcon className="hover:scale-150 duration-700" />
              Tailwind CSS
            </div>
            <div className="iconRef2 rounded-xl lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <img className="w-36 hover:scale-150 duration-700" src="./images/icon-api.png" alt="" />
              REST-API
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
