import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { bestsellerProducts } from "../redux/action";

export default function Home() {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.bestsellerData);
  console.log("data in Home component", result); // redux frist time call autometicly because no case match in reducer by default

  useEffect(() => {
    dispatch(bestsellerProducts());
  }, []);
  return (
    <>
      <div className="mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"2"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner1.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner2.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner3.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner4.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner5.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner6.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner7.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[40vh] w-[100%] object-cover"
              src="./asets/images/banner8.webp"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div className="">
          <div className="bg-gray-300 flex justify-between items-center px-3">
            <h5 className="text-2xl font-semibold">BestSeller Products</h5>
            <a className="font-medium" href="#">
              <h6>
                See All <i className="fa-solid fa-arrow-right"></i>
              </h6>
            </a>
          </div>
          <div className="flex gap-2 p-3">
            {result.map((item) => (
              <div className="product-item border-solid border-black border-2 p-4">
                <img src={item.image} width={200} alt="loading....." />

                <div> {item.title} </div>
                <div>discount : {item.discount} </div>
                <div>
                  preprice : <del>{item.preprice}</del>{" "}
                </div>
                <div>currprice : {item.currprice} </div>
                <div>brand : {item.brand} </div>

                  <button className="border-solid border-blue-600 border-2 p-1 mt-3 rounded-md">Add To Cart</button>
                  <button className="bg-blue-700 rounded-md p-1 text-white float-right mt-3">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
