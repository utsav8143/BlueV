import React from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-30 bg-white  ">
      <div className="mt-20 lg:ms-34 lg:me-34 ms-10 me-10 pt-10">
        <div className="">
          <h1 className="text-blue-950 font-bold">CONTACT US</h1>
          <h2 className="mt-4 text-5xl font-bold text-blue-800">
            Ready to make the switch to BlueV?
          </h2>
        </div>
        <div className="lg:flex sm:grid sm:grid-cols-1  mt-10 items-center  gap-25 pb-10 space-y-5 lg:space-y-0">
            <a href="tel:+919931905495" className="flex bg-blue-900 p-5  rounded-full gap-2 items-center hover:shadow-[0_0_20px] hover:shadow-blue-700 duration-300 transition-all hover:scale-95">
                <Phone className="text-white lg:size-7 "/>
                <h1 className="text-white font-bold lg:text-xl  ">BlueV</h1>
            </a>
            <a href="mailto:bluev2026@gmail.com" className="lg:mt-0 flex rounded-full gap-2 items-center border-2 border-blue-900 p-5  hover:shadow-[0_0_20px] hover:shadow-blue-900 duration-300 transition-all hover:scale-95">
                <Mail className="text-blue-900 size-7"/>
                <h1 className="text-blue-900 font-bold text-xl">bluev2026@gmail.com</h1>

            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
