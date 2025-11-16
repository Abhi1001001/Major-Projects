import React from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../Icons/icon-github.svg?react";
import LinkedinIcon from "../Icons/icon-linkedin.svg?react";
import MailIcon from "../Icons/icon-mail.svg?react";

export default function Footer() {
  return (
    <>
      <main className="">
      <footer className="max-w-7xl m-auto dark:text-white">
        <div className="flex flex-wrap justify-center items-center py-4 space-y-5">
          {/* text-----------------> */}
          <div className="flex flex-col font-inria text-xs">
            <Link to="tel:+917295047144">Phone : +91 72350-47144</Link>
            <Link to="mailto:av159593@gmail.com">
              Mail : av159593@gmail.com
            </Link>
            <span>Designed by Abhishek Vishwakarma</span>
          </div>

          {/* line ---------------> */}
          <div className="w-[1px] h-10 bg-black dark:bg-white mx-4"></div>

          {/* icons ---------------> */}  
          <div className="flex">
          <Link to="mailto:av159593@gmail.com"><MailIcon className="w-8 h-auto" /></Link>
          <Link to="https://github.com/Abhi1001001"><GithubIcon className="w-8 h-auto" /></Link>
          <Link to="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/"><LinkedinIcon className="w-8 h-auto" /></Link>
          </div>

          {/* line ---------------> */}
          <div className="w-[1px] h-10 bg-black dark:bg-white mx-4 sm:block hidden"></div>
          
          <form className="flex" action="">
            <input
              className="bg-gray-200 px-2 rounded-s-full text-sm outline-none"
              type="email"
              placeholder="Enter email"
            />
            <button
              className="bg-[#59d0b4] rounded-e-full px-2 py-1 text-white text-sm"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
      </main>
    </>
  );
}
