import React from "react";
import { Copyright, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <div className=" lg:ms-34 lg:me-34 ms-10 me-10 pb-2 pt-2">
      <div className="flex justify-between items-center">
        <div className=" mt-3 sm:ms-5 ">
          <h1 className="font-extrabold text-4xl mt-2 text-blue-950">
            Blue
            <span className="font-extrabold text-4xl text-blue-500">V'</span>
          </h1>
          <p className="text-[12px] text-blue-950 font-bold">
            VITALITY IN EVERY DROP
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Copyright />
            <p >2026 BlueV. Vitality in every drop</p>
             <a href="#home" className="bg-blue-900 p-2 rounded-xl text-white hover:bg-blue-800 hover:scale-95 transition-all duration-200 hover:cursor-pointer">
        <ArrowUp/>
      </a>
        </div>
       
      </div>
      
    </div>
  );
};

export default Footer;
