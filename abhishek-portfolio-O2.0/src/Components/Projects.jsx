import React from "react";

// import nextui componenets ------------>
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";

// import react router component ----------->
import { Link } from "react-router-dom";

// import icons using svgr library ----------->
import { ReactComponent as EnterIcon } from "../icons/enter-icon.svg";

// import gsap components ------------->
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects(props) {
  // register gsap plugin --------->
  gsap.registerPlugin(ScrollTrigger);

  // gsap hook ------------->
  useGSAP(() => {
    // project1 animation ------------>
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll1",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl1
      .from(
        ".pro1-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project1"
      )
      .from(
        ".pro1-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project1"
      );

    // project2 animation -------->
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll2",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl2
      .from(
        ".pro2-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project2"
      )
      .from(
        ".pro2-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project2"
      );

    // project3 animation -------->
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll3",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl3
      .from(
        ".pro3-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project3"
      )
      .from(
        ".pro3-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project3"
      );

    // project4 animation -------->
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll4",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl4
      .from(
        ".pro4-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project4"
      )
      .from(
        ".pro4-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project4"
      );

    // project5 animation -------->
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll5",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl5
      .from(
        ".pro5-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project5"
      )
      .from(
        ".pro5-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project5"
      );

    // project6 animation -------->
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll6",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl6
      .from(
        ".pro6-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project6"
      )
      .from(
        ".pro6-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project6"
      );

    // project7 animation -------->
    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll7",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl7
      .from(
        ".pro7-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project7"
      )
      .from(
        ".pro7-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project7"
      );

    // project8 animation -------->
    const tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll8",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl8
      .from(
        ".pro8-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project8"
      )
      .from(
        ".pro8-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project8"
      );

    // project9 animation -------->
    const tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll9",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl9
      .from(
        ".pro9-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project9"
      )
      .from(
        ".pro9-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project9"
      );

    // project10 animation -------->
    const tl10 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll10",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5,
      },
    });
    tl10
      .from(
        ".pro10-leftRef",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "project10"
      )
      .from(
        ".pro10-rightRef",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "project10"
      );
  });

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

          <CardBody className="card-body font-josefin">
            {/* 1st project */}
            <div className="scroll1 flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro1-leftRef lg:max-w-96 md:max-w-80 max-w-72  z-10 m-auto flex-shrink-0"
                  src="./images/user-management.png"
                  alt="loading..."
                />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="pro1-rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  User Management
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  User Management Application (Frontend)
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
            <div className="scroll2 flex flex-col-reverse md:flex-row py-4 gap-10 items-center">
              <div className="pro2-leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  E-comm
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  A e-commerce website (Frontend & Backend)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I'm building a fully responsive e-commerce website designed to
                  deliver a commercial-grade shopping experience. This
                  application is structured with React functional components,
                  State Management with Redux and Redux-Saga, Node.js and Express.js, MongoDB for Database Management, Custom API Integration, Interactive UI with SwiperJS for Carousel
                  Display, Navigation and Routing with React Router DOM, Styling
                  with NextUI for a Modern, Responsive Layout, Responsive and
                  Realistic E-Commerce Features.
                </p>
                <div className=" flex flex-wrap gap-4 md:mx-10 mx-3">
                  <Chip color="light" variant="bordered">
                    #React.js
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #NodeJS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #HTML
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #TailwindCSS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #NextUI
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #SwiperJS
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Redux-Saga
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Mongodb
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #ExpressJS
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
                    to="https://github.com/Abhi1001001/Major-Projects/tree/main/e-comm-O1.0"
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
                    to="https://github.com/Abhi1001001/Major-Projects/tree/main/e-comm-O1.0"
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
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3 fle" />
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro2-rightRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10 "
                  src="./images/e-comm.png"
                  alt="loading..."
                />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 3rd project */}
            <div className="scroll3 flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro3-leftRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/portfolio.png"
                  alt="loading..."
                />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="pro3-rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Abhishek-Portfolio
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  Personal portfolio (Frontend)
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
                    #Svgr
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #JavaScript
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Regex
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
                    to="https://github.com/Abhi1001001/Major-Projects/tree/main/abhishek-portfolio-O2.0"
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
                    to="https://github.com/Abhi1001001/Major-Projects/tree/main/abhishek-portfolio-O2.0"
                  >
                    Check live
                    <EnterIcon />
                  </Link>
                </Button>
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 4th project */}
            <div className="scroll4 flex flex-col-reverse md:flex-row py-4 gap-10 items-center ">
              <div className="pro4-leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  News App
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  This is class component project (Frontend)
                </p>
                <p className="text-justify md:px-10 px-3 py-3 md:text-lg text-md">
                  I have developed a React-based news application using class
                  components. Where users can explore news articles from an
                  integrated API. The app includes an infinite scrolling
                  feature. For designing and responsive layout I used Bootstrap
                  framework.
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
                  <Chip color="light" variant="bordered">
                    #React
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #Bootstrap
                  </Chip>
                  <Chip color="light" variant="bordered">
                    #API
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
                    to="https://github.com/Abhi1001001/Major-Projects/tree/main/news-app-O1.0"
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
                    to="https://github.com/Abhi1001001/Major-Projects/tree/main/news-app-O1.0"
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
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro4-rightRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/news-app.png"
                  alt="loading..."
                />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 5th project */}
            <div className="scroll5 flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro5-leftRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/pop-rock.png"
                  alt="loading..."
                />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="pro5-rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Pop Rock Crystal Shop
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  Product Landing Page (Frontend)
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
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 6th project */}
            <div className="scroll6 flex flex-col-reverse md:flex-row py-4 gap-10 items-center ">
              <div className="pro6-leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  To-Do-APP
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">To-do-app (Frontend)</p>
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
                  className="mt-5 hidden md:flex gap-0 ml-10"
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
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro6-rightRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/to-do-app.png"
                  alt="loading..."
                />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 7th project */}
            <div className="scroll7 flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro7-leftRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/quiz-app.png"
                  alt="loading..."
                />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="pro7-rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Quiz-App
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">A quiz app (Frontend)</p>
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
            <div className="scroll8 flex flex-col-reverse md:flex-row py-4 gap-10 items-center ">
              <div className="pro8-leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Digital-Clock
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  A digital clock with days (Frontend)
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
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro8-rightRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/clock.png"
                  alt="loading..."
                />
              </div>
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 9th project */}
            <div className="scroll9 flex flex-col md:flex-row py-4 gap-10 items-center">
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro9-leftRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/login-form.png"
                  alt="loading..."
                />
              </div>
              <Divider
                className="dark:bg-[#3D4852] md:block hidden"
                orientation="vertical"
              />
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="pro9-rightRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Log-in Form
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  Log-in & sign-up page with validation (Frontend)
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
                  className="mt-5 hidden md:flex gap-0 text-md ml-10"
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
            </div>

            <Divider className="dark:bg-[#3D4852]" />

            {/* 10th project */}
            <div className="scroll10 flex flex-col-reverse md:flex-row py-4 gap-10 items-center ">
              <div className="pro10-leftRef">
                <h3 className="md:text-2xl text-xl font-bold md:px-10 px-3">
                  Doodle-Home-Page
                </h3>
                <p className="md:px-10 px-3 text-sm md:text-md">
                  Clone of Google home page (Frontend)
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
              <Divider className="dark:bg-[#3D4852] block md:hidden w-2/3" />
              <div className="md:hover:scale-125 duration-500">
                <img
                  className="pro10-rightRef lg:max-w-96 md:max-w-80 max-w-72 flex-shrink-0 z-10"
                  src="./images/doodle-home-page.png"
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
