import React from "react";
import { Copyright, ArrowUp } from "lucide-react";
import lgooV from "../assets/lgooV.png"

const Footer = () => {
  return (
    <div className=" lg:ms-34 lg:me-34 ms-10 me-10 pb-2 ">
      <div className=" grid lg:grid-cols-3 sm:grid-cols-1 place-items-center space-y-3">
        <div className=" mt-3 sm:ms-10 flex lg:ms-0 ">
                 <div className="size-15 mt-3">
                  <img src={lgooV} alt="BlueV" />
                  </div>
                  <div className="">
                  <h1 className="font-extrabold text-4xl mt-2 text-blue-950">Blue<span className="font-extrabold text-4xl text-blue-500">V'</span></h1>
                  <p className="text-[12px] text-blue-950 font-bold">VITALITY IN EVERY DROP</p>
                </div>
                </div>
        <div className=" flex items-center gap-1 ">
            <Copyright />
            <p >2026 BlueV. Vitality in every drop</p>
            </div>
            <div className="bg-blue-900 p-2 rounded-xl text-white hover:bg-blue-800 hover:scale-95 transition-all duration-200 hover:cursor-pointer size-10">
             <a href="#home">
        <ArrowUp/>
      </a>
      </div>
        </div>
       
      </div>
      
  
  );
};

export default Footer;
