import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#F8FAF6] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e4587336-1a64-4c7d-b3fd-b8f762085ecb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C991BC] text-[#F79D65]'>Contact Us</p>
                <p className='text-[#646B8E] py-4'>Submit the form below</p>
            </div>
            <input className='bg-[#FBE9BF] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#F9E1AA]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#F8D894] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-[#C991BC] border-2 hover:bg-[#FBE9BF] hover:border-[#6B9A97] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact