import React from 'react';
// import {Maria} from '../assets/Maria.jpeg';
// import {Elizabeth} from '../assets/Elizabeth.png';

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#002C64] text-[#FCF2D4]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
               <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F5BBED]'>
                    About Us
                    </p>
                    <p className='text-4xl pt-8 font-bold'>We are artists crafting original custom quilts, digital art, and linotype cut prints.</p>
                </div>
                <div></div>
                <div>
                    <div className='sm:text-right text-2xl pt-8 pb-8'>
                    <p>Elizabeth Hines is an American artist based in Richmond, VA.</p>
                    <div className='pt-8 pb-8'></div>
                    <p>Maria Fuerte is an American artist based in Richmond, VA. She received her BFA in Craft and Material Studies with an Art History minor from the School of the Arts at Virginia Commonwealth University.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>   
  )
}

export default About;