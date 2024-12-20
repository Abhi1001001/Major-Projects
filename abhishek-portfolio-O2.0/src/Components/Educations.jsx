import { useGSAP } from "@gsap/react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Educations(props) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-body-education",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
    })

    tl.from(".topRef", {
      y: -100,
      duration: 1,
      opacity: 0,
      delay: 1,
    },"education")
    .from(".bottomRef", {
      y: 100,
      duration: 1,
      opacity: 0,
      delay: 1,
    },"education");
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
          className="max-w-screen-2xl m-3 dark:border-1 dark:border-[#3D4852]"
        >
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-josefin text-2xl font-bold">My Educations</p>
            </div>
          </CardHeader>
          <Divider className="dark:bg-[#3D4852]" />
          <CardBody className="card-body-education min-h-[65vh] md:min-h-[70vh] flex md:flex-row gap-4 md:gap-10  items-center justify-between">
            <section className="topRef md:w-2/5 md:mx-10 mx-3">
              <Card className="dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
                <CardBody>
                  <img
                    className="w-20"
                    src="./images/education-icon.png"
                    alt="Path Error..."
                  />
                  <h4 className="md:text-2xl text-xl font-josefin font-bold">
                    Diploma
                  </h4>
                  <p className="md:text-md text-sm">2019-2022</p>
                  <p className="md:text-lg text-md py-2">
                    Holder of a Diploma in Electrical and Electronics
                    Engineering from the Board of technical Education Uttar
                    Pradesh (BTEUP).
                  </p>
                </CardBody>
              </Card>
            </section>

            <section className="bottomRef md:w-2/5 md:mx-10 mx-3 ">
              <Card className="dark:border-[#3D4852] dark:border-1 dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
                <CardBody>
                  <img
                    className="w-20"
                    src="./images/education-icon.png"
                    alt="Path Error..."
                  />
                  <h4 className="md:text-2xl text-xl font-josefin font-bold">
                    Graduation
                  </h4>
                  <p className="md:text-md text-sm">2020-2023</p>
                  <p className="md:text-lg text-md py-2">
                    I'm graduate in Bachelor of Arts from an institution
                    affiliated with the Awadh University.
                  </p>
                </CardBody>
              </Card>
            </section>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
