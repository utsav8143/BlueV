import React from 'react'
import { ShieldCheck,Leaf , FlaskConical, Truck, User , ArrowRightLeft} from 'lucide-react'

const Quality = () => {
  return (
    <section id='quality' className='scroll-mt-30'>
    <div className='mt-20 lg:ms-34 lg:me-34 ms-10 me-10 '>
        <h1 className="text-blue-950 font-bold underline">QUALITY & SAFETY</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  mt-10 bg-blue-900 border border-white rounded-xl">
            <div className=" p-10 flex items-center border border-white rounded-tl-xl">
                <ShieldCheck className='text-white size-9'/>
                <div className="ms-2">
                    <h1 className="text-white text-xl font-bold">MULTI-STAGE PURIFICATION</h1>
                    <p className="text-white">Advanced RO + UV + Ozone</p>
                </div>
            </div>
            <div className=" p-10 flex items-center border border-white sm:rounded-tr-xl lg:rounded-none">
                <FlaskConical className='text-white size-9'/>
                <div className="ms-2">
                    <h1 className="text-white text-xl font-bold">LAB TESTED</h1>
                    <p className="text-white">Ensuring 100% quality</p>
                </div>
            </div>
            <div className=" p-10 flex items-center border border-white lg:rounded-tr-xl">
                <Leaf className='text-white size-9'/>
                <div className="ms-2">
                    <h1 className="text-white text-xl font-bold">ECO-FRIENDLY PACKING</h1>
                    <p className="text-white">Recyclable and safe</p>
                </div>
            </div>
            <div className=" p-10 flex items-center border border-white lg:rounded-bl-xl">
                <Truck className='text-white size-9'/>
                <div className="ms-2">
                    <h1 className="text-white text-xl font-bold">ON-TIME DELIVERY</h1>
                    <p className="text-white">Fast and reliable</p>
                </div>
            </div>
            <div className=" p-10 flex items-center border border-white sm:rounded-bl-xl lg:rounded-none">
                <User className='text-white size-9'/>
                <div className="ms-2">
                    <h1 className="text-white text-xl font-bold">TRUSTED BY THOUSANDS</h1>
                    <p className="text-white">Across cities</p>
                </div>
            </div>
            <div className=" p-10 flex items-center border border-white rounded-br-xl">
                <ArrowRightLeft className='text-white size-9'/>
                <div className="ms-2">
                    <h1 className="text-white text-xl font-bold">EASY EXCHANGE</h1>
                    <p className="text-white">Hassle free exchange</p>
                </div>
            </div>
        </div>
      
    </div>
    </section>
  )
}

export default Quality
