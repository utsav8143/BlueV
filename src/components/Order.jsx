import React from 'react'
import { Phone } from 'lucide-react'

const Order = () => {
  return (
    <section id='order' className='scroll-mt-30 bg-white'>
    <div className='mt-20 lg:ms-34 lg:me-34 ms-10 me-10 pt-5'>
        <div className="flex items-center justify-between">
            <div className="w-3/4">
           <h1 className="text-blue-950 font-bold">BULK ORDERS</h1>
           <h2 className="mt-4 text-5xl font-bold text-blue-800">Water for your team, event or buisness.</h2>
           <p className="mt-3 font-bold text-blue-900">Need regular supplies? Talk to BlueV for bulk pricing and scheduled delivery.</p>
           </div>
           <a className="bg-blue-950 p-4 rounded-full hover:shadow-[0_0_20px] hover:shadow-blue-800 duration-300 transition-all hover:scale-95" href='tel:+91'>
            <div className="flex">
                <Phone className='text-white size-8'/>
                <h1 className="text-white font-bold text-xl ms-2">Contact Us</h1>
            </div>
           </a>
        </div>
      
    </div>
    </section>
  )
}

export default Order
