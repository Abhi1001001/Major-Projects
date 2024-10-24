import React from "react";
// SwiperJS component import ------------>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// NextUI component import ------------>
import { Button, Card, CardBody } from "@nextui-org/react";

import Shop from "./Shop";
import Footer from "./Footer";
import AboutProduct from "./AboutProduct";

export default function Home() {
  return (
    <>
      {/* Home page -----------> */}
      <div className=" bg-[url(../public/images/background.png)] bg-cover font-sans max-w-screen-2xl xl:max-h-[900px] h-[100vh] flex flex-col justify-between m-auto">
        {/* Header section ------------> */}
        <header className="flex justify-between items-center px-12 py-8 text-[#ffffff]">
          <div>
            <img src="./images/pop-icon.png" alt="loading..." />
          </div>
          <div className="flex xl:space-x-44 lg:space-x-36 space-x-28">
            <ul className="flex w-[338px] justify-between font-medium">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#">About-us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
            <div className="flex w-[50px] items-center gap-1">
              <span className="bg-[#FF2B77] rounded-[50%] items-center font-bold text-xs p-1">
                00
              </span>
              <img
                className="w-[30px]"
                src="./images/basket-icon.png"
                alt="loading..."
              />
            </div>
          </div>
        </header>
        {/* Hero section -----------> */}
        <section className="absolute flex justify-between px-12 mt-32 xl:space-x-40 lg:space-x-28 space-x-24 items-center font-sans">
          {/* Text --------> */}
          <div>
            <p className="xl:text-4xl lg:text-2xl font-normal text-[#ffffff]">
              Welcome to
            </p>
            <h1 className="xl:text-6xl lg:text-5xl text-4xl font-bold text-[#ffffff]">
              Pop Rock Crystal Shop!
            </h1>
            <p className="max-w-[400px] mt-10 ">
              Here you will find unique phone accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
            <Button
              className="bg-white rounded-2xl text-[#317189] font-bold px-11 py-4 xl:mt-10 lg:mt-7 mt-5"
              variant="solid"
            >
              SHOP NOW
            </Button>
            <Button
              className="text-[#317189] font-bold px-11 py-4 xl:mt-10 lg:mt-7 mt-5 ml-2"
              variant="light"
            >
              about us
            </Button>
          </div>
          {/* Carousel -----------> */}
          <div>
            <Card className=" xl:max-w-[569px] lg:max-w-[469px] max-w-[400px] xl:max-h-[554px] lg:max-h-[454px] max-h-[454px] rounded-[50px]">
              <span className="absolute bg-[#8A93E5] w-24 py-2 rounded-tr-lg rounded-br-lg text-center mt-16 text-[#ffffff] font-medium">
                New lot
              </span>
              <CardBody className=" p-0 flex justify-center items-center">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[
                    Autoplay,
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                  ]}
                  className="mySwiper w-full h-[450px]"
                >
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 16.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 27.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 45.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 15.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 65.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 12.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 32.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 65.99$</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center font-normal text-2xl text-gray-400 font-sans">
                    <img
                      className="m-auto w-[362px]"
                      src="./images/product-img.png"
                      alt="loading..."
                    />
                    Crystal Agate Phone Grip{" "}
                    <span className="text-[#317189] font-bold">- 15.99$</span>
                  </SwiperSlide>
                </Swiper>
              </CardBody>
            </Card>
          </div>
        </section>
        {/* Scroll button -------------> */}
        <section className="w-full absolute bottom-0 flex justify-center text-[#317189] font-medium">
          <a href="#about-product">
            <button className="flex">
              <img src="./images/mouse-icon.png" alt="loading..." />
              scroll down
            </button>
          </a>
        </section>
        {/* Vactor shape -----------> */}
        <div>
          <img
            className="w-full"
            src="./images/vector-1.png"
            alt="loading..."
          />
        </div>
      </div>
      {/* Shop page -----------> */}
      <div id="shop">
        <Shop />
      </div>
      {/* About product --------> */}
      <div id="about-product">
        <AboutProduct />
      </div>
      {/* Footer page ----------> */}
      <div>
        <Footer />
      </div>
    </>
  );
}
