import React from 'react'
import imageBG from "../assets/imageBG.png"
import { Droplet, ShieldCheck, Leaf, ArrowRight } from 'lucide-react'
import bottle from "../assets/bottle.png"

const Hero = () => {
  return (
    <section id='home' className='scroll-mt-10'>
    <div className='relative w-full h-screen overflow-hidden lg:mt-0 sm:mt-25 '>
    <div
  className="absolute lg:bg-cover bg-no-repeat h-screen w-full sm:bg-cover "
  style={{ backgroundImage: `url(${imageBG})` }}
></div>

{/* Fade at the bottom, blending into next section */}
<div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-blue-300 z-10 pointer-events-none"></div>

<div className="relative z-20 lg:top-44 lg:ms-34 w-1/2 sm:top-10 sm:ms-10 sm:me-10">
  <p className="text-blue-800 font-bold lg:text-xl sm:text-sm">PREMIUM PACKED DRINKING WATER</p>
  <h1 className="text-blue-950 font-extrabold lg:text-7xl mt-5 sm:text-5xl">PURE WATER.</h1>
  <h1 className="text-blue-950 font-extrabold lg:text-7xl sm:text-5xl">EVERY DROP.</h1>
  <p className="lg:mt-10 sm:mt-7 font-bold text-blue-900 lg:text-xl">BlueV brings you 100% pure, healthy and refreshing drinking water, purified through advanced technology and packed with care.</p>
</div>
<div className="relative lg:top-55 lg:ms-34 sm:top-23 sm:ms-10 flex gap-3 z-20">
  <div className="flex items-center ">
    <div className="bg-blue-200 p-2 rounded-full">
    <Droplet className='text-blue-950 lg:w-5  lg:h-5 sm:w-4 sm:h-4'/>
    </div>
    <h1 className="ms-2 font-extrabold text-black ">100% PURE</h1>
  </div>
  <div className="flex items-center ">
    <div className="bg-blue-200 p-2 rounded-full">
    <ShieldCheck className='text-blue-950 lg:w-5  lg:h-5 sm:w-4 sm:h-4'/>
    </div>
    <h1 className="ms-2 font-extrabold text-black ">TRUSTED QUALITY</h1>
  </div>
  <div className="flex items-center sm:hidden lg:flex">
    <div className="bg-blue-200 p-2 rounded-full">
    <Leaf className='text-blue-950 lg:w-5  lg:h-5 sm:w-4 sm:h-4'/>
    </div>
    <h1 className="ms-2 font-extrabold text-black ">SAFE & HEALTHY</h1>
  </div>
</div>
<div className="relative flex lg:top-66 gap-10 lg:ms-34 z-20 sm:top-40 sm:ms-10">
  <div className="flex p-3 rounded-full bg-blue-500 text-center hover:shadow-[0_0_10px] hover:shadow-blue-950 transition-all duration-300 hover:scale-95">
  <a href="#products" className=' text-white  font-bold'>Explore Products</a>
  <ArrowRight className='text-white size-6'/>
  </div>
  <div className="flex p-3 rounded-full bg-white text-center hover:shadow-[0_0_10px] hover:shadow-blue-950 transition-all duration-300 hover:scale-95">
  <a href="#contact" className='text-blue-500  font-bold'>Bulk Order</a>
  <ArrowRight className='text-blue-500 size-6'/>
  </div>
</div>

</div>
</section>
  )
}

export default Hero