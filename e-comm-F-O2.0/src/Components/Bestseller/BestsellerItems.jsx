import { Button } from "@nextui-org/react";
import React from "react";

export default function BestsellerItems(props) {
  return (
    <>
      <section className="lg:max-w-64 md:max-w-52 max-w-44 max-h-96 rounded-md flex flex-col justify-between flex-shrink-0 border-solid border-[#4c4c4c54] border-[1px] m-1 p-2">
        {/* image -----------> */}
        <img
          className="max-w-24 max-h-52 m-auto"
          src={props.image}
          alt="loading....."
        />

        {/* title ---------> */}
        <div className="md:text-sm text-xs">
          {" "}
          {props.title.slice(0, 48) + "..."}{" "}
        </div>

        {/* discount & prices --------------> */}
        <div>
          <span className="text-green-700 md:text-sm text-xs">
            <b>Discount</b> : {`${props.discount}% `}
          </span>
          <span className="md:text-sm text-xs">
            <b>Price</b> : {`₹${props.price}`}
          </span>
        </div>

        {/* brand -------------> */}
        <div className="md:text-sm text-xs">
          <b>Brand</b> : {props.brand}
        </div>

        {/* buttons ----------------> */}
        <div className="flex justify-between gap-1 py-2">
          <Button
            variant="bordered"
            size="sm"
            className="md:text-sm text-xs rounded-full text-[#0043ff] border-[#00cdff]"
          >
            Add To Cart
          </Button>
          <Button
            size="sm"
            radius="full"
            className="bg-gradient-to-tr from-[#00cdff] to-[#0043ff] text-white shadow-lg md:text-sm text-xs"
          >
            Buy Now
          </Button>
        </div>
      </section>
    </>
  );
}
