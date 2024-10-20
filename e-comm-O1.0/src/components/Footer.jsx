import React from "react";

export default function Footer() {

  return (
    <footer className="bg-yellow-500 text-center flex">
      <div className="m-auto lg:w-[50%] w-[70%] flex justify-between h-[80%] text-xs md:text-[15px] sm:leading-6 bg-green-500">
        <div className="border-b-indigo-500 w-[60%] border-r-2 border-black">
          <a href="#">About-us</a> |<a href="#"> Careers</a> <br />
          123 E-Commerce Street, City, Country <br />
          <a href="tel:+910000000000">+910000000000</a> |
          <a href="mailto:e-comm@gmail.com"> e-comm@gmail.com</a>
        </div>

        {/* Icon from fontawsome */}
        <div className="border-b-orange-600 w-[40%] space-x-2 items-center pt-5 p-3">Social links <br />
        <i className="fa-brands p-1 fa-x-twitter"></i>
        <i className="fa-brands p-1 fa-instagram"></i>
        <i className="fa-brands p-1 fa-whatsapp"></i>
        <i className="fa-brands p-1 fa-facebook"></i>
        </div>
      </div>
    </footer>
  );
}
