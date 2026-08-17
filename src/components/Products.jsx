import React from "react";
import bottle from "../assets/bottle.png";

const Products = () => {
  return (
    <section id="products" className="scroll-mt-30">
      <div className="mt-20 lg:ms-34 lg:me-34 ms-10 me-10">
        <div className="">
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
