import React from 'react'
import Slippers from '../assets/images/clog-slippers_04.png';

const HeroSection = () => {
    return (
        <div>
            <section className='flex justify-evenly items-center flex-row flex-wrap p-0 w-full h-[80vh] bg-[#f3f3f3f3]'>
                <div>
                    <h1 className='text-5xl'>PREMIUM CLOG SLIPPERS</h1>
                    <h1 className='text-5xl text-[var(--red-color)]'>Sale 20% Off</h1>
                    <button className='bg-[var(--black-color)] text-[var(--white-color)] px-4 py-2 cursor-pointer'>SHOP NOW</button>
                </div>

                <div>
                    <img src={Slippers} alt="clog-slippers" className='w-xl h-auto' />
                </div>
            </section>
        </div>
    )
}

export default HeroSection