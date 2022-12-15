import React from 'react';



const Gallery = () => {
  
  return (
    <div name='gallery' className='w-full md:h-full text-[#A29682] bg-[#F8FAF6]'>
      <div className='max-w-[1640px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#A29682] border-[#C991BC]'>
            Gallery
          </p>
          <p className='py-6 text-4xl'>Check out some of our work</p>
        </div>

        {/* Container for artwork */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
        {/* Grid Item */}
          <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670781237/ButtercupBurrow/782A48E6-668F-4592-846B-3096D7AD9B5D_1_201_a_cupssy.jpg" alt={"family quilt"} /></div>

        {/* Grid Item */}
          <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670781237/ButtercupBurrow/15170081-CD1A-40B3-8429-473163920466_1_201_a_sl9cis.jpg" alt={"puppy luv quilt"} /></div>

        {/* Grid Item */}
         <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670777664/ButtercupBurrow/husky_quilt_jjfddl.jpg" alt={"husky quilt"} /></div>

        {/* Grid Item */}
         <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670777662/ButtercupBurrow/french_bulldogs_sgymz6.jpg" alt={"french bulldogs quilt"} /></div>

        {/* Grid Item */}
         <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670781237/ButtercupBurrow/05588904-3546-4A4E-89FC-0342B3E202FB_1_201_a_nv8dmo.jpg" alt={"portraits quilt"} /></div>

        {/* Grid Item */}
         <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670777661/ButtercupBurrow/alpaca_quilt_qv8wlc.jpg" alt={"alpaca quilt"} /></div>

        {/* Grid Item */}
        <div className='shadow-md shadow-[#A29682] group container rounded-md justify-center flex object-fill mx-auto content-div'>   
          <img className='my-4s' src="https://res.cloudinary.com/djfedr7vl/image/upload/v1670956395/ButtercupBurrow/CF729BC3-D7FC-455A-8268-DA9EDCEA4728_1_105_c_qoew2z.jpg" alt={"luna quilt"} /></div>

        {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
          <div className="pt-8 text-center ">
          </div>
          </div>
          </div>
          </div>
      </div>
    

  );
};

export default Gallery;