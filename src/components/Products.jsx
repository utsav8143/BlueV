import React from "react";
import bottle from "../assets/bottle.png";
import sample_1 from "../assets/sample_1.jpeg"
import  sample_2 from "../assets/sample_2.jpeg"
import  sample_3 from "../assets/sample_3.jpeg"

const Products = () => {
  return (
    <section id="products" className="scroll-mt-30">
      <div className="mt-30 lg:ms-34 lg:me-34 ms-10 me-10">
        <div className="lg:flex gap-7">
        <div className=" lg:w-1/2">
        <h1 className="font-bold underline text-blue-950">CUSTOMIZE YOUR HYDRATION</h1>
        <h2 className="font-bold text-blue-800 mt-10 text-5xl">Create a unique look for your event with fully customizable water bottles.</h2>
        <p className="font-bold text-blue-900 mt-10">Designed with your logo, colors, and packaging preferences. Perfect for businesses, events, and promotions.</p>
      </div>
     <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-5 max-w-xl mx-auto lg:max-w-2xl h-56 sm:h-64 lg:h-72 ">
  {/* Left column: two stacked images */}
  <div className="grid grid-rows-2 gap-2 sm:gap-3 lg:gap-4 lg:h-80 h-64">
    <div className="rounded-tl-xl lg:rounded-lg overflow-hidden">
      <img
        src={sample_1}
        alt="Sample 1"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="rounded-bl-xl lg:rounded-lg overflow-hidden">
      <img
        src={sample_2}
        alt="Sample 2"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right column: one tall image matching left column height */}
  <div className="rounded-tr-xl rounded-br-xl lg:rounded-lg overflow-hidden h-full">
    <img
      src={sample_3}
      alt="Sample 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>
        <div className="mt-10">
          <img
            src={bottle}
            alt="BlueV water bottle"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
