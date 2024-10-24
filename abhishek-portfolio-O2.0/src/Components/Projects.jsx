import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EnterIcon } from "../icons/enter-icon.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects(props) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.from('.leftRef', {
      x : -100,
      opacity : 0,
      duration : 1,
      delay : 0.3,
      scrollTrigger : {
        trigger : ".leftRef",
        scroller : "body",
        start : "top 90%"
      }
    });
    gsap.from('.rightRef', {
      x : 100,
      opacity : 0,
      duration : 1,
      delay : 0.3,
      scrollTrigger : {
        trigger : ".leftRef",
        scroller : "body",
        start : "top 90%"
      }
    })
  })
  return (
    <>
      <section
        className={`flex justify-center m-auto ${
          props.darkMode ? "dark bg-[#18181b]" : ""
        }`}
      >
        <Card
          shadow="lg"
          className=" max-w-screen-2xl  m-3 dark:border-1 dark:border-[#3D4852]"
        >
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-josefin font-bold text-2xl">My Projects</p>
            </div>
          </CardHeader>

          <Divider className="dark:bg-[#3D4852]" />

          <CardBody className="font-josefin">
            {/* 1st project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="leftRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 z-10 w-[400px] h-44"
                src="./images/user-management.png"
                alt="loading..."
              />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  User Management
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  (User Management Application)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I have developed a User Management System application using
                  React, Here user can Create, Read, and Delete operations on
                  user data. The application integrates with a Fake JSON Server
                  API to handle CRUD operations. The project use the Next UI
                  framework for modern, and responsive user interface.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #React.js
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #API
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #NextUI
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #TailwindCSS
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 text-md ml-10 "
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://user00management.netlify.app/"
                  >
                    {" "}
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 md:hidden flex gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://user00management.netlify.app/"
                  >
                    {" "}
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 2nd project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center">
              <img
                className=" leftRefw-80 h-44 z-10 block md:hidden"
                src="./images/pop-rock.png"
                alt=""
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Pop Rock Crystal Shop
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  (Product Landing Page)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I recently developed a product landing page for the "Pop Rock
                  Crystal Shop" using React and the Next UI framework. This is
                  single page website. The page is responsive on laptops and
                  nearby screen sizes.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #React.js
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #NextUI
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #TailwindCSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Figma
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #SwiperJS
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 text-md ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://pop-rock-crystal-shop.netlify.app/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://pop-rock-crystal-shop.netlify.app/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />

              <div className="rightRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-80 h-44 z-10 md:block hidden"
                src="./images/pop-rock.png"
                alt=""
              />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 3rd project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="leftRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-[400px] h-44 z-10"
                src="./images/portfolio.png"
                alt="loading..."
              />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Abhishek-Portfolio
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  (Personal portfolio)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I developed a personal portfolio website with new advanced
                  feature like light mode and dark mode to showcase projects,
                  skills, using web technologies and the React.JS. Where anyone
                  can connect with me by my social media and submitting his
                  details.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #React.js
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #NextUI
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #TailwindCSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Figma
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Svgr
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #JavaScript
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 text-md ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link className="flex" target="blank" to="/">
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link className="flex" target="blank" to="/">
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 4th project */}
            <div className=" flex flex-col md:flex-row py-4 gap-10 items-center ">
              <img
                className="leftRef w-[400px] h-48 z-10 block md:hidden"
                src="./images/login-form.png"
                alt=""
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Log-in Form
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  (Log-in & sign-up page with validation)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  In this project I created a log-in form using core HTML, CSS ,
                  JavaScript. Implemented password validation using regular
                  expressions. Source code also uploded on my github account.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #CSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #RegEx
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #JavaScript
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/Login-Form/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/Login-Form/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <div className="rightRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-[370px] h-44 z-10 hidden md:block"
                src="./images/login-form.png"
                alt="loading..."
              />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 5th project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center">
            <div className="leftRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-[400px] h-44 z-10"
                src="./images/to-do-app.png"
                alt="loading..."
              />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  To-Do-APP
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">(To-do-app)</p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  A dynamic To-Do App built with HTML, CSS, and JavaScript! User
                  can add new tasks to their to-do list and With a simple click,
                  users can remove tasks they have completed or no longer
                  needed. The app is fully responsive from desktops to
                  smartphones.
                </p>
                <div className="flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #CSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #googleIcon
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #JavaScript
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 text-md ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/To-Do-App/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/To-Do-App/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 6th project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center ">
              <img
                className="leftRef w-[400px] h-48 z-10 block md:hidden"
                src="./images/doodle-home-page.png"
                alt=""
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Doodle-Home-Page
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  (Clone of Google home page)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I create a google home page clone only using HTML and CSS, In
                  this project I created all things manualy like suggestion-bar
                  and search-bar etc. This is also responsive.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #CSS
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/doodle-home-page/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/doodle-home-page/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <div className="rightRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-[370px] h-44 z-10 hidden md:block"
                src="./images/doodle-home-page.png"
                alt="loading..."
              />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 7th project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center">
            <div className="leftRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-[400px] h-44 z-10"
                src="./images/quiz-app.png"
                alt="loading..."
              />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Quiz-App
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">(A quiz app)</p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I developed an interactive Quiz Application using HTML, CSS,
                  and JavaScript. This web-based app have 10 multiple-choice
                  questions, allowing users to attempt all questions and check
                  their final score at the end. The Quiz have a 5 minutes timer.
                </p>
                <div className="flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #CSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #JavaScript
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 text-md ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/Quiz-App/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/Quiz-App/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 8th project */}
            <div className="flex flex-col md:flex-row py-4 gap-10 items-center ">
              <img
                className="leftRef w-[400px] h-48 z-10 block md:hidden"
                src="./images/clock.png"
                alt=""
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Digital-Clock
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  (A digital clock with days)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I developed a digital clock using HTML, CSS and JavaScript,
                  this is a real time clock which display hours, minutes,
                  seconds, sessions and days.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #CSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #JavaScript
                  </Chip>
                </div>
                <Button
                  className="mt-5 hidden md:flex gap-0 ml-10"
                  color="primary"
                  variant="ghost"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/Clock/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
                <Button
                  className="mt-5 flex md:hidden gap-0 ml-3"
                  color="primary"
                  variant="solid"
                >
                  <Link
                    className="flex"
                    target="blank"
                    to="https://abhi1001001.github.io/Basic-Projects/Clock/"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <div className="rightRef flex-shrink-0">
              <img
                className="md:hover:scale-125 duration-250 w-[370px] h-44 z-10 hidden md:block"
                src="./images/clock.png"
                alt="loading..."
              />
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
