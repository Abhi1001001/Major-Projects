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

export default function Skills(props) {
  return (
    <>
      <section className={` p-3 ${props.darkMode ? "dark bg-[#18181b]" : "" }`}>
        <Card shadow="lg" className="max-w-screen-2xl dark:border-[#3D4852] dark:border-1 m-auto">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-josefin text-2xl font-bold">My Skills</p>
            </div>
          </CardHeader>
          <Divider className="dark:bg-[#3D4852"/>
          <CardBody className="flex flex-row flex-wrap min-h-[70vh] xl:gap-20 lg:gap-10 md:gap-6 gap-4 font-josefin text-xl font-medium xl:px-40 lg:px-12 md:px-6 px-3">
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <HtmlIcon />
              HTML
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <CSSIcon />
              CSS
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <JavaScriptIcon />
              JavaScript
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <ReactIcon />
              React
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <ReduxIcon />
              Redux-Saga
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <GitHubIcon />
              GitHub
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <BootStrapIcon />
              BootStrap
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <MaterialUIIcon />
              MaterialUI
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <TailwindCSSIcon />
              Tailwind CSS
            </Card>
            <Card shadow="lg" className="lg:w-36 md:w-32 w-28 m-auto text-center dark:border-[#3D4852] dark:border-1">
              <img className="w-36" src="./images/icon-api.png" alt="" />
              REST-API
            </Card>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
