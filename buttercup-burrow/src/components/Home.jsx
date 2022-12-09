import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#002C64]'>
        {/*CONTAINER*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#FCF2D4]'>
            <p className='text-[#F5676A] text-2xl'>Hello, welcome to</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#F8D894]'>Buttercup Burrows</h1>
            <h2 className='py-4 max-w-[700px]'>We make custom art for you</h2>
            <p className='text-[#A8CE76] py-4 max-w-[700px]'> Check out the Gallery to see some of our work or our Shop to browse our current stock</p>
            <div>
                <button className='text-[#FCF2D4] border-2 px-6 my-2 flex items-center hover:bg-[#F5676A]'>View Gallery <HiArrowNarrowRight className='ml-3'/></button>
            </div>
            <div>
                <button className='text-[#FCF2D4] border-2 px-6 my-2 flex items-center hover:bg-[#F5676A]'>View Shop <HiArrowNarrowRight className='ml-3'/></button>
            </div>
        </div>
    </div>
  )
}

export default Home;