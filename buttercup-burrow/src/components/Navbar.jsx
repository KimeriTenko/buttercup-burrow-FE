import React, {useState} from 'react';
import {FaBars, FaTimes, FaFacebook, FaInstagram, FaRegCalendarCheck} from 'react-icons/fa';
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import Logo from '../assets/bbLogo.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center pb-5 pt-11 px-4 bg-[#6B9A97] text-[#FCF2D4]'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '100px'}} />
        </div>

        {/*MENU*/}
        <ul className='hidden md:flex'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/gallery'>Gallery</a></li>
            <li><a href='/store'>Store</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>

         {/*SEARCH INPUT*/}
         <div className='bg-[#F8D894] text-[#646B8E] rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search'
        />
        </div>

        {/*CART BUTTON*/} 
        <button className='bg-[#F8D894] text-[#646B8E] hidden md:flex items-center py-2 rounded-full'>
        <AiOutlineShoppingCart size={22} className='mr-3' />Cart    
        </button>

        {/*HAMBURGER MENU*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*MOBILE MENU*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#646B8E] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><a href='/home'>Home</a></li>
            <li className='py-6 text-4xl'><a href='/about'>About</a></li>
            <li className='py-6 text-4xl'><a href='/gallery'>Gallery</a></li>
            <li className='py-6 text-4xl'><a href='/store'>Store</a></li>
            <li className='py-6 text-4xl'><a href='/contact'>Contact</a></li>
        </ul>
        
        {/*SOCIAL LINKS*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C991BC]'>
                    <a className='flex justify-between items-center w-full text-[#49443D]'
                    href="https://www.facebook.com/buttercupburrowstudios">
                        Facebook <FaFacebook size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#609288]'>
                    <a className='flex justify-between items-center w-full text-[#49443D]'
                    href="https://www.instagram.com/buttercupburrowstudios/?igshid=YmMyMTA2M2Y%3D">
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F79D65]'>
                    <a className='flex justify-between items-center w-full text-[#49443D]'
                    href="/contact">
                        Contact <FaRegCalendarCheck size={30} />
                    </a>
                </li>
        
            </ul>
        </div>
    </div>
  )
};

export default Navbar;