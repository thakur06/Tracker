import React from 'react'
import Nykaa from '../assets/icons/nykaa.png'
import Flipkart from '../assets/icons/flipkart.png'
import Amazon from '../assets/icons/amazon.png'
import Myntra from '../assets/icons/myntra.png'
import Ajio from '../assets/icons/ajio.png'
import SouledStore from '../assets/icons/souledstore.png'
import Powerlook from '../assets/icons/powerlook.png'

export const Integrations = () => {
  return (
    <div className='flex flex-col items-center justify-center px-2'>
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-2'>Integrate with any platform</h1>
      <p className='text-black text-base md:text-xl text-center mb-6'>
        We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code, you can embed all your testimonials to any platform!
      </p>
      <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        <img src={Nykaa} alt="Nykaa" className='w-16 h-16 md:w-24 md:h-24' />
        <img src={Flipkart} alt="Flipkart" className='w-16 h-16 md:w-24 md:h-24' />
        <img src={Amazon} alt="Amazon" className='w-16 h-16 md:w-24 md:h-24' />
        <img src={Myntra} alt="Myntra" className='w-16 h-16 md:w-24 md:h-24' />
        <img src={Ajio} alt="Ajio" className='w-16 h-16 md:w-24 md:h-24' />
        <img src={SouledStore} alt="SouledStore" className='w-16 h-16 md:w-24 md:h-24' />
        <img src={Powerlook} alt="Powerlook" className='w-32 h-6 md:w-70 md:h-12' />
      </div>
    </div>
  )
}
