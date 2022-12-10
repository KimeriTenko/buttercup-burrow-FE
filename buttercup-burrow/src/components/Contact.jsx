import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#002C64] flex justify-center items-center p-4'>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#A8CE76] text-[#49443D]'>Contact Us</p>
                <p className='text-[#49443D] py-4'>Submit the form below</p>
            </div>
            <input className='bg-[#FCF2D4] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#FCF2D4]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#FCF2D4] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#FCF2D4] border-2 hover:bg-[#F5676A] hover:border-[#F5676A] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact