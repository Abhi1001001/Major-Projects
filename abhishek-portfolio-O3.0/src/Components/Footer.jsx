import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedinIcon } from "../icons/icon-linkedin.svg";
import { ReactComponent as GitHubIcon } from "../icons/icon-github.svg";
import { ReactComponent as MailIcon } from "../icons/icon-mail.svg";
import { Divider } from '@nextui-org/react';

export default function Footer(props) {
  return (
    <>
    <footer className={`   ${props.darkMode ? "dark" : ""}`}>
        <div className='w-full dark:bg-[#18181b] dark:text-white flex items-center md:gap-10 gap-4 py-2 justify-center'>
        <section className='flex flex-col gap-1 text-xs font-inria'>
           <Link to="tel:+917295047144"> Phone No : +917235047144</Link>
            <Link to="mailto:av159593@gmail.com">Email : av159593@gmail.com</Link>
            designed by Abhishek Vishwakarma
        </section>
        <Divider  orientation="vertical" className='text-red-600 h-14'/>
        <section className='flex items-center gap-3'>
            <LinkedinIcon className='w-8 h-8'/>
            <GitHubIcon className='w-8 h-8 dark:text-white'/>
            <MailIcon className='w-8 h-8'/>
        </section>
        </div>
    </footer>
    </>
  )
}
