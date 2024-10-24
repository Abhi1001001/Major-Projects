import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React from "react";

export default function Shop() {
  return (
    <>
      <div className="max-w-screen-2xl m-auto">
        <h1 className="text-5xl font-extrabold text-[#31546D] text-center mt-24 mb-12">
          <span className="border-b-4 border-[#F2F2F2]">All Products</span>
        </h1>

        <div className="flex xl:w-[40%] lg:w-[50%]">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ml-12">
            <Select label="Filter" className="max-w-44">
              <SelectItem>All Products</SelectItem>
              <SelectItem>Catagory 1 </SelectItem>
              <SelectItem>Catagory 2 </SelectItem>
              <SelectItem>Catagory 3 </SelectItem>
            </Select>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select label="Sort" className="max-w-44">
              <SelectItem>Best Selling</SelectItem>
              <SelectItem>Catagory 1 selling</SelectItem>
              <SelectItem>Catagory 2 selling</SelectItem>
              <SelectItem>Catagory 3 selling</SelectItem>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12">
          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96  mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button className="w-44 mt-5 bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] text-[#ffffff]">
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96  mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96  mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96 mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96 mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96 mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96 mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="xl:w-80 lg:w-60 h-96 mt-8">
            <CardBody className="overflow-visible p-0">
              <img
                className="h-48 w-48 m-auto"
                src="./images/product-img.png"
                alt="loading..."
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b className="text-xl font-normal">Crystal Agate Phone Grip</b>
              <span className="text-xl font-bold text-[#317189]">18.99$</span>
              <Button
                variant="bordered"
                color="primary"
                className="w-44 mt-5 border-3"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full text-center mt-14">
          <Button
            variant="bordered"
            color="primary"
            className="w-36 border-3"
          >
            View All
          </Button>
        </div>
      </div>
    </>
  );
}
