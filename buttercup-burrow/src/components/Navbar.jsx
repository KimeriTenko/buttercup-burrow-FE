import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/bbLogo.png';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#002C64] text-[#FCF2D4]'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '75px' }} />
        </div>

        {/*MENU*/}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Store</li>
            <li>Calendar/Contact</li>
        </ul>

        {/*HAMBURGER MENU*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        {/*MOBILE MENU*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#002C64] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Gallery</li>
            <li className='py-6 text-4xl'>Store</li>
            <li className='py-6 text-4xl'>Calendar/Contact</li>
        </ul>
        
        {/*SOCIAL LINKS*/}
        <div className='hidden'>

        </div>
    </div>
  )
};

export default Navbar