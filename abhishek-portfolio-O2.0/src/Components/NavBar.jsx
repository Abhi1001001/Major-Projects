import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChatIcon } from "../icons/chat-icon.svg";
import { ReactComponent as SendIcon } from "../icons/send-icon.svg";
import { ReactComponent as LinkedinIcon } from "../icons/icon-linkedin2.svg";
import { ReactComponent as EmailIcon } from "../icons/icon-mail2.svg";
import { ReactComponent as WhatsappIcon } from "../icons/icon-whatsapp2.svg";
import { ReactComponent as PhoneIcon } from "../icons/icon-phone2.svg";
import { ReactComponent as LogoIcon } from "../icons/icon-logo.svg";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import ThemeSwitch from "../NextUIComponenets/ThemeSwitch";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  const [message, setMessage] = useState();
  const [chatHistory, setChatHistory] = useState([]);
  const menuItems = [
    "Home",
    "Skills",
    "Projects",
    "Educations",
    "Resume",
    "Contect-us",
  ];

  // toggle chatbox ----------->
  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  // handle send message in chat box ---------->
  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message !== "") {
      setChatHistory([...chatHistory, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  // get darkmode data from child component --------->
  const getData = (value) => {
    setDarkMode(value);
  };

  // send darkmode data to parent componenet ---------->
  props.sendData(darkMode);

  // GSAP animation --------->
  const tl = gsap.timeline();
  useGSAP(()=>{
    tl.from(".linkRef, .homeIconRef", {
      y : -30,
      opacity : 0,
      duration : 1,
      delay : 0.7,
      stagger : 0.3
    })
  })

  return (
    <>
      {/* Novbar section ----------> */}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        className={`border-b-1 ${
          darkMode ? "dark text-white border-[#3D4852] bg-[#18181b]" : ""
        }`}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand>
            <LogoIcon className="homeIconRef w-12 h-12 " />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-5 font-concert"
          justify="center"
        >
          <NavbarItem className="linkRef">
            <Link  className="text-xl" color="foreground" to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem  className="linkRef">
            <Link className="text-xl" to="/Skills" aria-current="page">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem  className="linkRef">
            <Link className="text-xl" color="foreground" to="/Projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem  className="linkRef">
            <Link className="text-xl" color="foreground" to="/Educations">
              Educations
            </Link>
          </NavbarItem>
          <NavbarItem  className="linkRef">
            <Link className="text-xl" color="foreground" to="/Resume">
              Resume
            </Link>
          </NavbarItem>
          <NavbarItem  className="linkRef">
            <Link className="text-xl" color="foreground" to="/Contect-us">
              Contect Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Child Componenet of darkmode ----------> */}
        <ThemeSwitch getData={getData} />

        <NavbarMenu
          className={`w-1/2 border-1 rounded-lg bg-transparent dark:border-white ${
            darkMode ? "dark" : ""
          }`}
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-xl w-full font-concert dark:text-white"
                to={index === 0 ? "/" : `/${item}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Chat box section -----> */}
      <section
        className={`flex space-x-2 fixed bottom-10 right-10 z-50 items-center font-josefin ${
          darkMode ? "dark" : ""
        }`}
      >
        {!isOpen && (
          <Card className="border-1 border-[#ffa200] p-2 after:content-[''] after:bg-inherit after:w-4 after:h-4 after:absolute after:bottom-3 after:-right-2 after:rotate-45 overflow-visible after:border-t-1 after:z-50 after:border-r-1 after:border-[#ffa200]">
            Chat with us
          </Card>
        )}
        <ChatIcon
          className="shadow-2xl   cursor-pointer"
          onClick={toggleChatbox}
        />
        {isOpen && (
          <Card
            shadow="lg"
            className="fixed border-1 border-[#ffa200] right-5 bottom-20 max-w-[300px] max-h-[450px] m-3 z-30 after:content-[''] after:bg-inherit after:w-5 after:h-5 after:absolute after:-bottom-[10px] after:right-7 after:rotate-45 overflow-visible after:border-b-1 after:border-r-1 after:border-[#ffa200]"
          >
            <CardHeader className="flex gap-3">
              <div className=" w-full flex justify-between">
                <p className="font-josefin text-2xl font-bold">Chat with us</p>
                <button className="cursor-pointer" onClick={toggleChatbox}>
                  X
                </button>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="relative h-[40vh] font-josefin">
              <div className="h-full flex flex-col justify-between items-end">
                <Card
                  shadow="lg"
                  className=" m-4 p-5 dark:border-[#3D4852] dark:border-1 after:content-[''] after:bg-inherit after:w-5 after:h-5 after:absolute after:bottom-6 after:-left-[11px] after:rotate-45 overflow-visible dark:after:border-[#3D4852] after:border-b-1 after:border-l-1 "
                >
                  <p className="text-sm h-min">
                    Hi there, sorry we're unavailable at the moment. Please
                    leave your details and we will get back to you shortly.
                  </p>
                </Card>

                {chatHistory.map((chat, index) => (
                  <Card
                    key={index}
                    className={`message m-4 p-3 dark:border-1 dark:border-[#3D4852] w-min after:content-[''] after:bg-inherit after:w-4 after:h-4 after:absolute after:bottom-[14px] after:-right-2 after:rotate-45 overflow-visible dark:after:border-[#3D4852] after:border-t-1 after:border-r-1 ${
                      chat.sender === "user" ? "sent" : "received"
                    }`}
                  >
                    <p className="text-sm h-min">{chat.text}</p>
                  </Card>
                ))}

                <form
                  className="sticky backdrop-blur-lg bottom-0 flex gap-2 w-full"
                  onSubmit={handleSendMessage}
                  name="chat"
                  netlify
                >
                  <Input
                    type="text"
                    placeholder="Type any massage..."
                    variant="underlined"
                    name="message"
                    onKeyUp={(event) => setMessage(event.target.value)}
                  />
                  <Button
                    className="z-30"
                    size="sm"
                    type="submit"
                    color="primary"
                    variant="shadow"
                  >
                    <SendIcon />
                  </Button>
                </form>
              </div>
            </CardBody>
          </Card>
        )}
      </section>

      {/* Contect icons section ---------> */}
      <section
        className={`flex flex-col ml-3 gap-5 fixed z-30 translate-y-full ${
          darkMode ? "dark" : ""
        }`}
      >
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/"
        >
          <LinkedinIcon className="md:w-9 w-6 h-min dark:text-white" />
        </Link>
        <Link target="_blank" to="tel:+917235047144">
          <PhoneIcon className="md:w-9 w-6 h-min dark:text-white " />
        </Link>
        <Link target="_blank" to="mailto:av159593@gmail.com">
          <EmailIcon className="md:w-9 w-6 h-min dark:text-white " />
        </Link>
        <Link
          target="_blank"
          to="https://wa.me/7235047144?text=Hello, I find you by your portfolio"
        >
          <WhatsappIcon className="md:w-9 w-6 h-min dark:text-white " />
        </Link>
      </section>
    </>
  );
}
