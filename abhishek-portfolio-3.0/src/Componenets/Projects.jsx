import { useGSAP } from "@gsap/react";
import EnterIcon from "../Icons/enter-icon.svg?react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  // GSAP Animation -------------------------->gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".pro1-slide-left", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro1-slide-left",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro1-slide-right", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro1-slide-right",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro2-slide-left", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro2-slide-left",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro2-slide-right", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro2-slide-right",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro3-slide-left", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro3-slide-left",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro3-slide-right", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro3-slide-right",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro4-slide-left", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro4-slide-left",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro4-slide-right", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro4-slide-right",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
  });

  return (
    <>
      <main className="w-[100vw] dark:bg-[#121212]">
        <div className="max-w-7xl m-auto font-josefin p-2 dark:bg-[#121212]">
          <div className="projects border border-black rounded-xl py-5 dark:border-white">
            {/* user management project -------------> */}
            <section className="flex lg:flex-row flex-col py-4 overflow-hidden">
              {/* image section ----------------> */}
              <img
                className="pro1-slide-left g:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
                src="./images/user-management.png"
                alt="loading....."
              />
              <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
              {/* text section ------------------> */}
              <div className="pro1-slide-right sm:px-10 px-5 dark:text-white">
                <h3 className="sm:text-xl text-lg font-semibold">
                  User Management
                </h3>
                <p className="sm:text-sm text-xs">
                  User management application (Frontend)
                </p>
                <p className="sm:text-base text-sm text-justify">
                  I have developed a User Management System application using
                  React, Here user can Create, Read, and Delete operations on
                  user data. The application integrates with a Fake JSON Server
                  API to handle CRUD operations. The project use the Next UI
                  framework for modern, and responsive user interface.
                </p>
                <div className="flex flex-wrap gap-4 mb-4 mt-2">
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #ReactJS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #API
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #TailwindCSS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #Context-API
                  </span>
                </div>
                <a href="https://user00management.netlify.app/" target="_blank">
                  <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-blue-600 active:scale-110 active:duration-0 hover:bg-blue-500 sm:text-base text-sm items-center">
                    Check live
                    <EnterIcon />
                  </button>
                </a>
              </div>
            </section>

            <div className="h-[0.5px] bg-black mx-3 dark:bg-white"></div>

            {/* e-comm project --------------->  */}
            <section className="flex lg:flex-row-reverse flex-col py-4 overflow-hidden">
              {/* image section ----------------> */}
              <img
                className="pro2-slide-right lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
                src="./images/e-comm.png"
                alt="loading....."
              />
              <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
              {/* text section ------------------> */}
              <div className="pro2-slide-left sm:px-10 px-5 dark:text-white">
                <h3 className="sm:text-xl text-lg font-semibold">E-comm</h3>
                <p className="sm:text-sm text-xs">
                  A e-commerce website (Frontend & Backend)
                </p>
                <p className="sm:text-base text-sm text-justify">
                  I'm building a fully responsive e-commerce website designed to
                  deliver a commercial-grade shopping experience. This
                  application is structured with React functional components,
                  State Management with Redux and Redux-Saga, Node.js and
                  Express.js, MongoDB for Database Management, Custom API
                  Integration, Interactive UI with SwiperJS for Carousel
                  Display, Navigation and Routing with React Router DOM, Styling
                  with NextUI for a Modern, Responsive Layout, Responsive and
                  Realistic E-Commerce Features.
                </p>
                <div className="flex flex-wrap gap-4 mb-4 mt-2">
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #ReactJS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #Node
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #Mongodb
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #ExpressJS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #TailwindCSS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #SwiperJS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #Redux
                  </span>
                </div>
                <a href="https://our-e-comm.netlify.app/">
                  <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-blue-600 active:scale-110 active:duration-0 hover:bg-blue-500 sm:text-base text-sm items-center">
                    Check live
                    <EnterIcon />
                  </button>
                </a>
              </div>
            </section>

            <div className="h-[1px] bg-black mx-3 dark:bg-white"></div>

            {/* portfolio project -------------> */}
            <section className="flex lg:flex-row flex-col py-4 overflow-hidden">
              {/* image section ----------------> */}
              <img
                className="pro3-slide-left lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
                src="./images/portfolio.png"
                alt="loading....."
              />
              <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
              {/* text section ------------------> */}
              <div className="pro3-slide-right sm:px-10 px-5 dark:text-white">
                <h3 className="sm:text-xl text-lg font-semibold">
                  Abhishek Portfolio
                </h3>
                <p className="sm:text-sm text-xs">
                  A personal portfolio (Frontend)
                </p>
                <p className="sm:text-base text-sm text-justify">
                  I developed a personal portfolio website with new advanced
                  feature like light mode and dark mode to showcase projects,
                  skills, using web technologies and the React.JS. Where anyone
                  can connect with me by my social media and submitting his
                  details.
                </p>
                <div className="flex flex-wrap gap-4 mb-4 mt-2">
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #ReactJS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #Svgr
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #JavaScript
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #Regex
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #TailwindCSS
                  </span>
                </div>
                <a
                  href="https://abhishek-vishwakarma.netlify.app/"
                  target="_blank"
                >
                  <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-blue-600 active:scale-110 active:duration-0 hover:bg-blue-500 sm:text-base text-sm items-center">
                    Check live
                    <EnterIcon />
                  </button>
                </a>
              </div>
            </section>

            <div className="h-[1px] bg-black mx-3 dark:bg-white"></div>

            {/*Quiz-App project --------------->  */}
            <section className="flex lg:flex-row-reverse flex-col py-4 overflow-hidden">
              {/* image section ----------------> */}
              <img
                className="pro4-slide-right lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
                src="./images/quiz-app.png"
                alt="loading....."
              />
              <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
              {/* text section ------------------> */}
              <div className="pro4-slide-left sm:px-10 px-5 dark:text-white">
                <h3 className="sm:text-xl text-lg font-semibold">Quiz-App</h3>
                <p className="sm:text-sm text-xs">A quiz app (Frontend)</p>
                <p className="sm:text-base text-sm text-justify">
                  I have developed a User Management System application using
                  React, Here user can Create, Read, and Delete operations on
                  user data. The application integrates with a Fake JSON Server
                  API to handle CRUD operations. The project use the Next UI
                  framework for modern, and responsive user interface.
                </p>
                <div className="flex gap-4 mb-4 mt-2">
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #HTML
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #CSS
                  </span>
                  <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                    #JavaScript
                  </span>
                </div>
                <a
                  href="https://abhi1001001.github.io/Basic-Projects/Quiz-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-blue-600 active:scale-110 active:duration-0 hover:bg-blue-500 sm:text-base text-sm items-center">
                    Check live
                    <EnterIcon />
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
