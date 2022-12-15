import React from 'react';

const About = () => {
  return (
    <div name='About' className='w-full h-full bg-[#F8FAF6] text-[#A29682]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1640px] w-full px-4 grid sm:grid-cols-auto gap-8'>
               <div className='sm:text-right pt-8 pb-8 pl-4'>
                    <p className='text-4xl pt-16 font-bold border-b-4 border-[#F5BBED] text-[#F79D65]'>
                    About Us
                    </p>
                    <p className='text-4xl pt-12 font-bold'>We are artists crafting original custom quilts, digital art, and linocut prints.</p>
                </div>
                <div></div>
                <div>
                    {/* Grid Item */}
                    <div className='shadow-md shadow-[#A29682] sm:text-right text-2xl pt-8 pb-8 pr-8 pl-8 group container rounded-md justify-center flex object-fill mx-auto content-div'>   
                    <img nameClass='my-4' src='https://res.cloudinary.com/djfedr7vl/image/upload/v1670781236/ButtercupBurrow/E418CA60-D055-4AC6-9336-75A2FA0377EB_1_105_c_orrci2.jpg' alt='Elizabeth Hines' />
                    <p nameClass='text-align:justify' > Elizabeth Hines is an American artist based in Richmond, VA. She is a craft artist specializing in ceramics.</p>
                    </div>
                    
                    {/* Grid Item */}
                    <div className='shadow-md shadow-[#A29682] sm:text-right text-2xl pt-8 pb-8 pr-8 pl-8 group container rounded-md justify-center flex object-fill mx-auto content-div'>
                    <img nameClass='my-4' src='https://res.cloudinary.com/djfedr7vl/image/upload/v1670781236/ButtercupBurrow/BB9C40B1-D3A7-420C-BFC5-6B9AA12A0900_1_105_c_ypc7vs.jpg' alt='Maria Fuerte' />
                    <p nameClass='text-align:justify' > Maria Fuerte is an American artist based in Richmond, VA. She received her BFA in Craft and Material Studies with an Art History minor from the School of the Arts at Virginia Commonwealth University.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
  )
}

export default About;