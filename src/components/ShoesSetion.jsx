import React from 'react'
import Shoes from '../assets/images/shoes.png'

const ShoesSetion = () => {
  return (
    <div className='flex justify-between items-center flex-wrap text-center md:text-start gap-2 bg-[var(--white-color)]'>
        <img src={Shoes} alt="Shoes" className='w-auto h-auto object-cover' />
        <div className='space-y-2'>
            <h1 className='text-3xl text-[var(--black-color)] font-bold'>AVENION STYLE COLLECTIONS</h1>
            <h1 className='text-3xl text-[var(--red-color)] font-bold'>Sale 20% Off</h1>
            <button className='text-[var(--white-color)] bg-[var(--black-color)] px-6 py-2'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default ShoesSetion