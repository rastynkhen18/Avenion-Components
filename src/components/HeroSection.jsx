import React from 'react'
import Slippers from '../assets/images/clog-slippers_04.png';

const HeroSection = () => {
    return (
        <div>
            <section className='flex justify-center items-center flex-row flex-wrap text-center md:text-start bg-[var(--white-color)] py-5'>
                <div className='space-y-4'>
                    <h1 className='text-5xl'>PREMIUM CLOG SLIPPERS</h1>
                    <h1 className='text-5xl text-[var(--red-color)]'>Sale 20% Off</h1>
                    <button className='bg-[var(--black-color)] text-[var(--white-color)] px-4 py-2 cursor-pointer'>SHOP NOW</button>
                </div>

                <div>
                    <img src={Slippers} alt="clog-slippers" className='w-full h-auto' />
                </div>
            </section>
        </div>
    )
}

export default HeroSection