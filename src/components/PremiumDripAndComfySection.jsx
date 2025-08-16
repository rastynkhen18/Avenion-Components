import React from 'react'
import Frame01 from '../assets/images/Frame01.png'
import Frame02 from '../assets/images/Frame02.png'
import Frame03 from '../assets/images/Frame03.png'

const PremiumDripAndComfySection = () => {
  return (
    <div>
        <section className='flex flex-col items-center justify-center gap-4 p-8 bg-[var(--white-color)]'>
          <h1 className='text-2xl font-bold text-[var(--black-color)]'>Premium Drip & Comfy</h1>
          <p className='text-lg text-[var(--gray-color)] text-center'>"Clog slippers that blend runway style with cloud-soft comfort - perfect for both big fits and chill days."</p>
          <button className='text-[var(--white-color)] bg-[var(--gray-color)] px-6 py-2 rounded-full'>Key Features</button>
          <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            <img src={Frame01} alt="Frame01" className='w-auto h-full object-cover' />
            <img src={Frame02} alt="Frame02" className='w-auto h-full object-cover' />
            <img src={Frame03} alt="Frame03" className='w-auto h-full object-cover' />
          </div>
          <button className='text-[var(--white-color)] bg-[var(--black-color)] px-6 py-2'>Learn More</button>
        </section>
    </div>
  )
}

export default PremiumDripAndComfySection