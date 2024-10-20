import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function AboutProduct() {
  return (
    <>
      <div className="bg-[url(../public/images/background.png)] bg-cover font-sans max-w-screen-2xl xl:max-h-[900px] h-[100vh] flex flex-col justify-center items-center m-auto">
        <section className="absolute flex items-center gap-16">
          {/* text section ---------> */}
          <div className="text-[#31546D] font-sans text-right">
            <p className="xl:text-4xl lg:text-2xl text-xl font-normal">BEST PRICE</p>
            <h1 className="xl:text-6xl lg:text-4xl text-3xl font-bold">Agate Phone Grip</h1>
            <del className="xl:text-2xl lg:text-xl text-lg text-[#41A0B7]">44.50$</del>
            <span className="font-bold xl:text-7xl lg:text-5xl text-4xl text-[#E35B3E]">19.50$</span>
            <p className="xl:w-[400px] lg:w-[350px] w-[300px] text-[#31546D] ml-24">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
            <Button className="text-[#ffffff] w-44 mt-5 bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]">
              Buy Now
            </Button>
          </div>
          {/* image section ---------> */}
          <div>
            <Card shadow="lg" className="rounded-[50%] xl:w-[570px] lg:w-[470px] w-[400px] xl:h-[570px] lg:h-[470px] h-[400px]">
              <CardBody className="p-0 ">
                <Card shadow="lg" className="rounded-[50%] xl:w-[364px] lg:w-[264px] w-[230px] xl:h-[364px] lg:h-[264px] h-[230px] m-auto">
                  <CardBody className="p-0 ">
                    <img
                      className="h-60 w-60 m-auto"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </div>
        </section>
        {/* vector shape ------------> */}
        <div className="w-full">
          <img
            className="w-full md:h-[670px] xl:h-[785px] 2xl:h-[900px]"
            src="./images/vector-2.png"
            alt="loading..."
          />
        </div>
      </div>
    </>
  );
}
