import React from "react";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import lgooV from "../assets/lgooV.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
      ? "bg-blue-300 opacity-95 backdrop-blur-sm shadow-lg shadow-blue-900 pb-3"
      : "lg:bg-transparent bg-blue-300 pb-1"
    }`}>
    <div >
      <div className="flex  lg:justify-evenly justify-between ">
         
        <div className=" mt-3 sm:ms-10 flex ">
         <div className="size-15 mt-3">
          <img src={lgooV} alt="BlueV" />
          </div>
          <div className="">
          <h1 className="font-extrabold text-4xl mt-2 text-blue-950">Blue<span className="font-extrabold text-4xl text-blue-500">V'</span></h1>
          <p className="text-[12px] text-blue-950 font-bold">VITALITY IN EVERY DROP</p>
        </div>
        </div>
        <div className="lg:flex hidden gap-8 mt-9">
          <a
            href="#home"
            className="text-blue-950 font-bold hover:text-primary transition-colors duration-300 relative 
         after:content-['']
         after:absolute
         after:left-0
         after:top-5
         after:w-full
         after:h-0.5
         after:bg-blue-950
         after:opacity-0
         after:transition-[opacity,all,transform]
         after:duration-300
         hover:after:opacity-100
         hover:after:translate-y-1
         focus:after:opacity-100
         focus:after:translate-y-1"
          >
            Home
          </a>
        
          <a
            href="#about-us"
            className="text-blue-950 font-bold hover:text-primary transition-colors duration-300 relative 
         after:content-['']
         after:absolute
         after:left-0
         after:top-5
         after:w-full
         after:h-0.5
         after:bg-blue-950
         after:opacity-0
         after:transition-[opacity,all,transform]
         after:duration-300
         hover:after:opacity-100
         hover:after:translate-y-1
         focus:after:opacity-100
         focus:after:translate-y-1"
          >
            About Us
          </a>
            <a
            href="#products"
            className="text-blue-950 font-bold hover:text-primary transition-colors duration-300 relative 
         after:content-['']
         after:absolute
         after:left-0
         after:top-5
         after:w-full
         after:h-0.5
         after:bg-blue-950
         after:opacity-0
         after:transition-[opacity,all,transform]
         after:duration-300
         hover:after:opacity-100
         hover:after:translate-y-1
         focus:after:opacity-100
         focus:after:translate-y-1"
          >
            Our Products
          </a>
          <a
            href="#quality"
            className="text-blue-950 font-bold hover:text-primary transition-colors duration-300 relative 
         after:content-['']
         after:absolute
         after:left-0
         after:top-5
         after:w-full
         after:h-0.5
         after:bg-blue-950
         after:opacity-0
         after:transition-[opacity,all,transform]
         after:duration-300
         hover:after:opacity-100
         hover:after:translate-y-1
         focus:after:opacity-100
         focus:after:translate-y-1"
          >
            Quality & Safety
          </a>
        
          <a
            href="#contact"
           className="text-blue-950 font-bold hover:text-primary transition-colors duration-300 relative 
         after:content-['']
         after:absolute
         after:left-0
         after:top-5
         after:w-full
         after:h-0.5
         after:bg-blue-950
         after:opacity-0
         after:transition-[opacity,all,transform]
         after:duration-300
         hover:after:opacity-100
         hover:after:translate-y-1
         focus:after:opacity-100
         focus:after:translate-y-1"
          >
            Contact Us
          </a>
          </div>
          <div className="lg:flex hidden ms-20 gap-2 bg-blue-950 rounded-3xl p-3 mt-7 items-center hover:shadow-[0_0_30px] hover:shadow-blue-900 transition-all duration-300 hover:scale-95">
            <Phone className="h-5 w-5 text-white"/>
            <a href="tel:+919931905495" className="font-bold text-white">Order Now</a>
          </div>
        
       

        {/* Hamburger Icon */}
        <button
          className="lg:hidden me-20 mt-2 text-gray-500 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="">
          <div className="lg:hidden flex flex-col  justify-center  mt-5 bg-blue-300 ">
            <a
              href="#home"
              className="text-gray-700 font-bold  p-5 hover:text-gray-100 transition-transform "
              onClick={()=>setIsOpen(false)}
              
            >
              Home
            </a>
            <a
              href="#about-us"
              className="text-gray-700 font-bold  p-5 hover:text-gray-100 transition-transform"
              onClick={()=>setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-gray-700 font-bold  p-5 hover:text-gray-100 transition-transform"
              onClick={()=>setIsOpen(false)}
            >
              Our Products
            </a>
            <a
              href="#quality"
              className="text-gray-700 font-bold  p-5 hover:text-gray-100 transition-transform"
              onClick={()=>setIsOpen(false)}
            >
              Quality & Safety
            </a>
            
            <a
              href="#contact"
              className="text-gray-700 font-bold  p-5 hover:text-gray-100 transition-transform"
              onClick={()=>setIsOpen(false)}
            >
              Contact Us
            </a>
            <div className="flex items-center m-2 bg-blue-950 justify-center rounded-full">
                <Phone className=" w-5 h-5 text-white"/>
            <a
              href="tel:+919931905495"
              className="text-white font-bold  p-5  transition-transform "
              onClick={()=>setIsOpen(false)}
            >
              Order Now
            </a>
            </div>

           
          </div>
        </div>
      )}
    </div>
    </header>
  );
};

export default Header;