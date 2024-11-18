import React, { useRef } from "react";
import CodeSnippet from "./CodeSnippet";

// imports internal component ---------->
import Skills from "./Skills";
import Projects from "./Projects";
import Educations from "./Educations";
import Resume from "./Resume";
import ContectUs from "./ContectUs";

// import icons from svgr library ------->
import { ReactComponent as EnterIcon } from "../icons/enter-icon.svg";

// import nextui componenets -------->
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";

// import gsap for animation --------->
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home(props) {
  // hooks of nextui popup box --------->
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // useRef hooks for gsap referance ----------->
  const h1Ref = useRef();
  const homeTextRef = useRef();
  const imageRef = useRef();

  // useGSAP hook for referance -------------->
  useGSAP(() => {
    gsap.from(h1Ref.current, {
      y: -30,
      opacity: 0,
      delay: 0.7,
      duration: 1,
    });
    gsap.from(homeTextRef.current, {
      x: -100,
      opacity: 0,
      delay: 0.7,
      duration: 1,
    });
    gsap.from(imageRef.current, {
      x: 30,
      opacity: 0,
      delay: 0.7,
      duration: 1,
    });
    gsap.from(".btnRef", {
      y: 30,
      opacity: 0,
      delay: 0.7,
      duration: 1,
    });
  });

  return (
    <>
      <main className={`${props.darkMode ? "dark bg-[#18181b]" : ""}`}>
        {/* home page section ----------------------------> */}
        <section className=" max-w-screen-2xl flex justify-center m-auto">
          <Card
            className="w-full m-3 dark:border-[#3D4852] dark:border-1"
            shadow="lg"
          >
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="font-josefin text-2xl font-bold">
                  Abhishek Vishwakarma
                </p>
              </div>
            </CardHeader>

            <Divider className="dark:bg-[#3D4852]" />

            <CardBody className="md:h-[70vh] h-[400px] flex flex-row md:justify-between  md:text-left content-center overflow-hidden lg:gap-0 md:gap-4 items-center lg:pl-28 md:pl-16 px-8 font-josefin">
              {/* text and buttons section ------------> */}
              <div className="ml-16 md:ml-0 xl:max-w-[650px] lg:max-w-[50vw] md:w-[70vw] z-10 text-left">
                <h1 ref={h1Ref} className="text-3xl">
                  I'm a MERN Stack Developer
                </h1>
                <p ref={homeTextRef} className="text-lg hidden media900:block">
                  I'm a dedicated full-stack developer with a passion for creating
                  innovative digital solutions.I aim to contribute to a dynamic
                  team, drive innovation, and continuously enhance my expertise
                  in front-end technologies.Eager to contribute to projects that
                  prioritize user experience and performance, while staying
                  up-to-date with the latest industry trends and best practices.
                </p>
                {/* button for desktop --------> */}
                <div className="btnRef">
                  <Button
                    className="mt-2 hidden md:flex md:gap-0"
                    color="primary"
                    variant="ghost"
                    onClick={onOpen}
                  >
                    About Me
                    <EnterIcon />
                  </Button>
                </div>
                {/* button for mobile --------> */}
                <div className="btnRef">
                  <Button
                    className="mt-2 flex md:hidden gap-0 "
                    color="primary"
                    variant="solid"
                    onClick={onOpen}
                  >
                    About Me
                    <EnterIcon />
                  </Button>
                </div>
              </div>

              {/* image section ------------> */}
              <div className="md:block hidden">
                <img
                  ref={imageRef}
                  className="lg:w-[650px] w-[600px] md:h-[550px] h-[450px] object-cover "
                  src="./images/portfolio-img2.png"
                  alt="loading..."
                />
              </div>
            </CardBody>
          </Card>
        </section>

        {/* skills page section ----------------------------> */}
        <section>
          <Skills />
        </section>

        {/* projects page section -------------------------> */}
        <section>
          <Projects />
        </section>

        {/* education page section ----------------------> */}
        <section>
          <Educations />
        </section>

        {/* resume page section -------------------------> */}
        <section>
          <Resume />
        </section>

        {/* contect-us page section ---------------------> */}
        <section>
          <ContectUs />
        </section>

        {/* modle of about me button -----------------> */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur"
          size="5xl"
          shadow="lg"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  About Me
                </ModalHeader>

                <ModalBody>
                  <CodeSnippet darkMode={props.darkMode} />
                </ModalBody>

                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    OK
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </main>
    </>
  );
}
