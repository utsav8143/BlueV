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
      <div className="lg:grid lg:grid-cols-2 sm:grid-cols-1 flex mt-5">
        <div className=" lg:grid">
        <div className="lg:w-57 w-43.5 lg:rounded-lg rounded-tl-xl overflow-hidden"><img src={sample_1} alt="Sample 1" className="w-fit h-fit object-cover" /></div>
        <div className="lg:w-57 w-43.5 lg:mt-4 lg:rounded-lg rounded-bl-xl overflow-hidden"><img src={sample_2} alt="Sample 2" className="w-fit h-fit object-cover" /></div>
        </div>
        <div className="lg:w-64 lg:h-95 h-69.5 lg:rounded-lg rounded-tr-xl rounded-br-xl overflow-hidden"><img src={sample_3} alt="Sample 3" className="w-fit h-fit object-cover" /></div>
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
