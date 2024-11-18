import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="bg-yellow-500 text-center flex">
      <div className="m-auto lg:w-[50%] w-[70%] flex justify-between h-[80%] text-xs md:text-[15px] sm:leading-6">
        <div className="border-b-indigo-500 w-[60%] border-r-1 border-black">
          <Link to="/about-us">About-us</Link> |<Link to="/careers"> Careers</Link> <br />
          123 E-Commerce Street, City, Country <br />
          <Link to="tel:+910000000000">+910000000000</Link> |
          <Link to="mailto:e-comm@gmail.com"> e-comm@gmail.com</Link>
        </div>


        <div className="border-b-orange-600 w-[40%] space-x-2 items-center pt-5 p-3">Social links <br />
        
        </div>
      </div>
    </footer>
  );
}
