import { useEffect } from "react";

// import icons from svgr library ------->
import ForwardArrowIcon  from "../../icons/forward-arrow-icon.svg?react";


// Import Swiperjs components ------->
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiperjs styles ----------->
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import react redux hooks ----------->
import { useDispatch, useSelector } from "react-redux";

// import internal components and actions ------------>
import { bestsellerProducts } from "../../redux/Actions/Action";
import BestsellerItems from "../Bestseller/BestsellerItems";

// import nextui components --------->
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

// import react router dom components ------------>
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  // getting data from store ------------->
  const result = useSelector((state) => state.bestsellerData);

  // bestseller action dispatching in useEffect hook ------------->
  useEffect(() => {
    dispatch(bestsellerProducts());
  }, []);

  return (
    <>
      <main>
        {/* crousel section ------------> */}
        <section className="mt-10 max-w-screen-2xl m-auto">
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
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner1.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner2.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner3.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner4.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner5.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner6.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner7.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:max-h-[40vh] h-[35vh] w-[100%] object-fill"
                src="./assets/images/banner8.webp"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Bestseller section -------------> */}
        <section className=" max-w-screen-2xl m-auto">
          <div className="bg-gray-300 flex justify-between items-center px-3">
            <h5 className="lg:text-2xl md:text-xl font-semibold">BestSeller Products</h5>
            <Link className="font-medium lg:text-sm text-[#02169a] text-xs " to="/bestseller">
              <h6 className="flex">
                See All <ForwardArrowIcon/>
              </h6>
            </Link>
          </div>
          <section className="flex overflow-x-scroll">
            {result.map((item, index) => {
              return (
                <BestsellerItems
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  brand={item.brand}
                  model={item.model}
                  color={item.color}
                  category={item.category}
                  discount={item.discount === undefined ? 0 : item.discount}
                />
              );
            })}
          </section>
        </section>

        {/* Best Gadgets & Appliances section ------------> */}
        <section className="flex lg:flex-row justify-center flex-col mt-2 px-2 max-w-screen-2xl m-auto">
          <div className="xl:w-[570px] lg:w-[550px] flex-shrink-0">
            <div className="bg-gray-300 -mx-2 flex justify-between items-center px-3">
              <h5 className="lg:text-2xl md:text-xl text-base font-semibold">
                Best Gadgets & Appliances
              </h5>
              <Link className="font-medium md:text-sm text-xs text-[#02169a]" to="/best-gadgets">
                <h6 className="flex">
                  See All <ForwardArrowIcon/>
                </h6>
              </Link>
            </div>
            <div className="flex justify-evenly flex-wrap">
              {/* card1 ------> */}
              <div className="xl:w-64 lg:w-60 w-[40%] xl:h-72 lg:h-64 md:h-auto h-56 rounded-md flex-shrink-0 border-solid border-[#4c4c4c54] border-[1px] m-1 p-2 text-sm md:text-base">
                <img
                  className="m-auto xl:max-w-52 lg:max-w-48 md:max-w-40 max-w-32 xl:py-11 lg:py-7 md:py-6 py-9"
                  src="./assets/images/gaming.webp"
                  alt="loading..."
                />
                <p>Gaming Products</p>
                <p className="font-medium text-green-700">Min. 50% Off</p>
              </div>
              {/*card2------> */}
              <div className="xl:w-64 lg:w-60 w-[40%] xl:h-72 lg:h-64 md:h-auto h-56 rounded-md flex-shrink-0 border-solid border-[#4c4c4c54] border-[1px] m-1 p-2 text-sm md:text-base">
                <img
                  className="xl:max-w-52 lg:max-w-48 md:max-w-40 max-w-32 xl:py-2 md:py-0 py-4 m-auto"
                  src="./assets/images/mobile.jpeg"
                  alt="loading..."
                />
                <p>Mobiles</p>
                <p className="font-medium text-green-700">Min. 30% Off</p>
              </div>
              {/* card3------> */}
              <div className="xl:w-64 lg:w-60 w-[40%] xl:h-72 lg:h-64 md:h-auto h-56 rounded-md flex-shrink-0 border-solid border-[#4c4c4c54] border-[1px] m-1 p-2 text-sm md:text-base">
                <img
                  className="xl:max-w-52 lg:max-w-48 md:max-w-40 max-w-32 xl:py-11 lg:py-8 md:py-9 py-10 m-auto"
                  src="./assets/images/tv.webp"
                  alt="loading..."
                />
                <p>TV</p>
                <p className="font-medium text-green-700">Min. 10% Off</p>
              </div>
              {/* card4---------> */}
              <div className="xl:w-64 lg:w-60 w-[40%] xl:h-72 lg:h-64 md:h-auto h-56 rounded-md flex-shrink-0 border-solid border-[#4c4c4c54] border-[1px] m-1 p-2 text-sm md:text-base">
                <img
                  className="xl:max-w-52 lg:max-w-48 md:max-w-40 max-w-32 xl:py-2 lg:py-0 md:py-2 py-4 m-auto"
                  src="./assets/images/audio.jpeg"
                  alt="loading..."
                />
                <p>Audio</p>
                <p className="font-medium text-green-700">Min. 40% Off</p>
              </div>
            </div>
          </div>

          <div>
            <img
              className="h-full"
              src="./assets/images/banner1.webp"
              alt="loading..."
            />
          </div>
        </section>
        
        {/* New products ------------> */}
        <section className="flex md:flex-nowrap flex-wrap gap-2 py-2 max-w-screen-2xl justify-evenly m-auto px-2 ">
          <Card
            isFooterBlurred
            className="xl:max-w-72 lg:max-w-60 md:max-w-48 h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white px-1 -ml-3 rounded-tr-md rounded-br-md bg-blue-500 uppercase font-bold">
                New
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-contain"
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black lg:text-lg text-sm font-medium">
                  Beauty
                </p>
              </div>
              <Button
                className="bg-gradient-to-tr from-[#00cdff] to-[#0043ff] text-white shadow-lg text-xs"
                color="primary"
                radius="full"
                size="sm"
              >
                See More
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="xl:max-w-72 lg:max-w-60 md:max-w-48 h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white px-1 -ml-3 rounded-tr-md rounded-br-md bg-blue-500 uppercase font-bold">
                New
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-contain"
              src="https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black lg:text-lg text-sm font-medium">Fragrances</p>
              </div>
              <Button
                className="bg-gradient-to-tr from-[#00cdff] to-[#0043ff] text-white shadow-lg text-xs"
                color="primary"
                radius="full"
                size="sm"
              >
                See More
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="xl:max-w-72 lg:max-w-60 md:max-w-48 h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white px-1 -ml-3 rounded-tr-md rounded-br-md bg-blue-500 uppercase font-bold">
                New
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-contain"
              src="https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black lg:text-lg text-sm font-medium">
                  Groceries
                </p>
              </div>
              <Button
                className="bg-gradient-to-tr from-[#00cdff] to-[#0043ff] text-white shadow-lg text-xs"
                color="primary"
                radius="full"
                size="sm"
              >
                See More
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="xl:max-w-72 lg:max-w-60 md:max-w-48 h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white px-1 -ml-3 rounded-tr-md rounded-br-md bg-blue-500 uppercase font-bold">
                New
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-contain"
              src="https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black lg:text-lg text-sm font-medium">
                  Furniture
                </p>
              </div>
              <Button
                className="bg-gradient-to-tr from-[#00cdff] to-[#0043ff] text-white shadow-lg text-xs"
                color="primary"
                radius="full"
                size="sm"
              >
                See More
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
