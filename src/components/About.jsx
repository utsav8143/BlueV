import React from 'react'
import { ShieldCheck, Leaf } from 'lucide-react'

const About = () => {
  return (
    <section id='about-us' className='scroll-mt-37'>
    <div className='lg:ms-34 ms-10 mt-10 me-10 lg:me-34'>
      <div className="lg:flex gap-6">
        <div className="lg:w-1/2">
            <h1 className="font-bold text-blue-950 underline">ABOUT BlueV</h1>
            <h2 className="text-5xl font-bold text-blue-800 mt-7">Pure water, thoughtfully delivered.</h2>
            <p className="mt-7 font-bold text-blue-900">From purification to packaging, every BlueV bottle is designed around one promise: clean, refreshing water you can trust every day.</p>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
            <div className="bg-blue-200 rounded-2xl p-5">
                <ShieldCheck className='text-blue-500 size-12'/>
                <h1 className="text-blue-900 text-xl font-bold mt-6">Quality at every stage</h1>
                <p className="text-gray-600 font-bold mt-5">Advanced purification, hygienic bottling and careful quality checks</p>
            </div>
            <div className="bg-blue-200 rounded-2xl p-5">
                <Leaf className='text-blue-500 size-12'/>
                <h1 className="text-blue-900 text-xl font-bold mt-6">Made with care</h1>
                <p className="text-gray-600 font-bold mt-5">Reliable packaging and delivery for homes, offices and events.</p>
            </div>
        </div>
      </div>
      
    </div>
    </section>
  )
}

export default About
