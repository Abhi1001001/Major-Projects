import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

export default function Resume(props) {
  return (
    <>
      <section className={`p-3 ${props.darkMode ? "dark bg-[#18181b]" : ""}`} >

          <Card shadow="lg" className="max-w-screen-2xl h-[85vh] dark:border-1 dark:border-[#3D4852] mx-auto">

            <CardHeader className="font-josefin text-2xl font-bold">
              My Skills
            </CardHeader>

            <Divider className="dark:bg-[#3D4852]" />
            
            <CardBody className="w-full">
              <object className="h-full mx-3" data="./images/Abhishek-CV.pdf"></object>
            </CardBody>
          </Card>

      </section>
    </>
  );
}
