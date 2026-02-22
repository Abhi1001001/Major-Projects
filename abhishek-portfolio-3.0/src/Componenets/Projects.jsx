import { useGSAP } from "@gsap/react";
import EnterIcon from "../Icons/enter-icon.svg?react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  // GSAP Animation -------------------------->gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".pro-text", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".pro-text",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
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
    gsap.from(".pro5-slide-left", {
      duration: 2,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro5-slide-left",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
    gsap.from(".pro5-slide-right", {
      duration: 2,
      x: 80,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".pro5-slide-right",
        scroller: "body",
        scrub: 1.5,
        start: "top 85%",
        end: "top 30%",
      },
    });
  });

  return (
    <>
      <div className="max-w-7xl m-auto font-josefin p-2 dark:bg-[#0c0c0c">
        <div className="projects py-5 dark:border-white">
          <div className="sm:px-10 px-5">
            <p className="pro-text text-teal-400 font-semibold uppercase tracking-wide">
              ABOUT MY WORK
            </p>
            <h2 className="pro-text text-4xl font-bold mt-2 mb-4 text-black dark:text-white">
              My <span className="text-teal-400">Project</span> Showcase
            </h2>
            <p className="pro-text text-lg dark:text-white mb-6">
              Here’s a collection of the projects I’ve built, highlighting my
              skills, creativity, and problem-solving through real-world
              applications.
            </p>
          </div>

          {/* ElectraZone app project --------------->  */}
          <section className="flex lg:flex-row-reverse flex-col py-4 overflow-hidden">
            {/* image section ----------------> */}
            <img
              className="pro2-slide-right lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
              src="./images/electrazone.png"
              alt="loading....."
            />
            <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
            {/* text section ------------------> */}
            <div className="pro2-slide-left sm:px-10 px-5 dark:text-white">
              <h3 className="sm:text-xl text-lg font-semibold">ElectraZone</h3>
              <p className="sm:text-sm text-xs">
                A Electronics Kart App (Frontend & Backend)
              </p>
              <p className="sm:text-base text-sm text-justify">
                Developed ElectraZone, a full-stack electronics e-commerce app
                with user/admin roles, authentication, email verification via
                Nodemailer, profile image uploads using Multer and Cloudinary,
                and product filtering and sorting. Built with React, ShadCN UI,
                Tailwind, SwiperJS, Axios, Node.js, Express, MongoDB, JWT, and
                bcrypt.
              </p>
              <div className="flex flex-wrap gap-4 mb-4 mt-2">
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #ReactJS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #NodeJS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #TailwindCSS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #Javascript
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #MongoDB
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #Express
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #SwiperJS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #ShadCN UI
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #Cloudinary
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #JWT
                </span>
              </div>
              <a href="https://electrazone.netlify.app/" target="_blank">
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
                  Check live
                  <EnterIcon />
                </button>
              </a>
            </div>
          </section>

          <div className="h-[0.5px] bg-black mx-3 dark:bg-white"></div>

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
                React, Here user can Create, Read, and Delete operations on user
                data. The application integrates with a Fake JSON Server API to
                handle CRUD operations. The project use the Next UI framework
                for modern, and responsive user interface.
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
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
                  Check live
                  <EnterIcon />
                </button>
              </a>
            </div>
          </section>

          <div className="h-[0.5px] bg-black mx-3 dark:bg-white"></div>

          {/* task management app project --------------->  */}
          <section className="flex lg:flex-row-reverse flex-col py-4 overflow-hidden">
            {/* image section ----------------> */}
            <img
              className="pro2-slide-right lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
              src="./images/task-management.png"
              alt="loading....."
            />
            <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
            {/* text section ------------------> */}
            <div className="pro2-slide-left sm:px-10 px-5 dark:text-white">
              <h3 className="sm:text-xl text-lg font-semibold">
                Task Management
              </h3>
              <p className="sm:text-sm text-xs">
                A Task Management App (Frontend & Backend)
              </p>
              <p className="sm:text-base text-sm text-justify">
                I built a full stack task manager with user authentication,
                password reset, and complete task CRUD. Users can add, edit,
                delete, and mark tasks as done. The app has secure login with
                JWT and bcrypt, plus a reset link for forgotten passwords. The
                frontend uses React, TypeScript, Vite, Tailwind, Zustand, React
                Query, Zod, and React Hook Form. The backend is built with Node,
                Express, MongoDB, and Mongoose. It also logs errors for
                debugging. The project shows how I handle real-world flows like
                validation, API state, and secure auth.
              </p>
              <div className="flex flex-wrap gap-4 mb-4 mt-2">
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #ReactJS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #NodeJS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #TailwindCSS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #TypeScript
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #MongoDB
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #Express
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #react-query
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #zod
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #zustand
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #JWT
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #react-hook-form
                </span>
              </div>
              <a href="https://to-do-app-min.netlify.app/" target="_blank">
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
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
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
                  Check live
                  <EnterIcon />
                </button>
              </a>
            </div>
          </section>

          <div className="h-[1px] bg-black mx-3 dark:bg-white"></div>

          {/*Freshcart project --------------->  */}
          <section className="flex lg:flex-row-reverse flex-col py-4 overflow-hidden">
            {/* image section ----------------> */}
            <img
              className="pro4-slide-right lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
              src="./images/freshcart.png"
              alt="loading....."
            />
            <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
            {/* text section ------------------> */}
            <div className="pro4-slide-left sm:px-10 px-5 dark:text-white">
              <h3 className="sm:text-xl text-lg font-semibold">Freshcart</h3>
              <p className="sm:text-sm text-xs">An e-commerce app (Frontend)</p>
              <p className="sm:text-base text-sm text-justify">
                FreshCart is a responsive e-commerce landing page built to
                showcase a clean and user-friendly product listing experience.
                The home page displays products in an organized layout optimized
                for all screen sizes, while the login page provides a simple and
                intuitive authentication interface. The project focuses on
                responsive design, reusable UI components, and smooth user
                interaction, making it a solid foundation for a modern
                e-commerce application.
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
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #TailwindCSS
                </span>
              </div>
              <a
                href="https://abhi1001001.github.io/Basic-Projects/Freshcart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
                  Check live
                  <EnterIcon />
                </button>
              </a>
            </div>
          </section>

          <div className="h-[1px] bg-black mx-3 dark:bg-white"></div>

          {/* pdf-viewer project -------------> */}
          <section className="flex lg:flex-row flex-col py-4 overflow-hidden">
            {/* image section ----------------> */}
            <img
              className="pro5-slide-left lg:max-w-72 max-w-64 lg:mx-5 object-contain m-auto"
              src="./images/pdf-reader.png"
              alt="loading....."
            />
            <div className="bg-black lg:w-[1px] sm:w-[430px] w-[300px] lg:h-auto h-[1px] m-auto lg:my-0 my-4 dark:bg-white"></div>
            {/* text section ------------------> */}
            <div className="pro5-slide-right sm:px-10 px-5 dark:text-white">
              <h3 className="sm:text-xl text-lg font-semibold">PDF - Reader</h3>
              <p className="sm:text-sm text-xs">A pdf reader app (Frontend)</p>
              <p className="sm:text-base text-sm text-justify">
                This is a ReactJS-based PDF Viewer application that displays a
                list of PDF documents fetched from a dummy API. Each PDF entry
                shows a title, author, and published date in the UI. Users can
                select and view any PDF file directly in the browser using a
                built-in viewer. The app also includes a search functionality
                that allows users to filter PDFs by title, author, or published
                date in real-time for better accessibility.
              </p>
              <div className="flex flex-wrap gap-4 mb-4 mt-2">
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #ReactJS
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #JavaScript
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #Context-API
                </span>
                <span className="border-2 border-black rounded-full px-2 py-1 text-xs dark:border-white">
                  #TailwindCSS
                </span>
              </div>
              <a href="https://pdf-viewers.netlify.app/" target="_blank">
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
                  Check live
                  <EnterIcon />
                </button>
              </a>
            </div>
          </section>

          <div className="h-[0.5px] bg-black mx-3 dark:bg-white"></div>

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
                React, Here user can Create, Read, and Delete operations on user
                data. The application integrates with a Fake JSON Server API to
                handle CRUD operations. The project use the Next UI framework
                for modern, and responsive user interface.
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
                <button className="rounded-full sm:px-3 px-2 sm:py-2 py-1 mt-2 duration-300 ease-in-out text-white flex bg-[#59d0b4] active:scale-110 active:duration-0 hover:bg-[#56c1a8] sm:text-base text-sm items-center">
                  Check live
                  <EnterIcon />
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
