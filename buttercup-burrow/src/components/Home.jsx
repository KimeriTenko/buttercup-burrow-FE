import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#F8FAF6]'>
        {/*CONTAINER*/}
        <div className='max-w-[1640px] mx-auto px-8 flex flex-col justify-center h-full text-[#C991BC]'>
            <p className='text-[#F79D65] text-2xl'>Hello, welcome to</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#A29682]'>Buttercup Burrows</h1>
            <h2 className='py-4 max-w-[700px]'>We make custom art for you</h2>
            <p className='text-[#578F52] py-4 max-w-[700px]'> Check out the Gallery to see some of our work or our Shop to browse our current stock</p>
            <div>
                <Link to='/gallery'><button className='text-[#555047] border-2 px-6 my-2 flex items-center hover:bg-[#FBE9BF] hover:border-[#6B9A97]'>View Gallery <HiArrowNarrowRight className='ml-3'/></button></Link>
            </div>
            <div>
                <Link to='/store'><button className='text-[#555047] border-2 px-6 my-2 flex items-center hover:bg-[#FBE9BF] hover:border-[#6B9A97]'>View Store <HiArrowNarrowRight className='ml-3'/></button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home;