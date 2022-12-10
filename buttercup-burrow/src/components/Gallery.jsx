import React from 'react';
// import 1 from '../assets/1.jpeg';


const Gallery = () => {
  
  return (
    <div name='gallery' className='w-full md:h-screen text-[#49443D] bg-[#F8FAF6]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#49443D] border-[#F5676A]'>
            Work
          </p>
          <p className='py-6'>Check out some of our work</p>
        </div>

{/* Container for artwork */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
    {/* Grid Item */}
    <div style={{backgroundImage: `url(${1})`}} 
            className='shadow-md shadow-[#F5BBED] group container rounded-md flex justify-center items-center mx-auto content-div'>
    
    {/* Hover Effects */}
    <div className="opacity-0 group-hover:opacity-100 ">
    <div className="pt-8 text-center ">
       
    </div>
    </div>
</div>
</div>
</div>
</div>
  );
};

export default Gallery;