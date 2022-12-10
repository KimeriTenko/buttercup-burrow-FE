import React, {useState} from 'react';
import {FaBars, FaTimes, FaFacebook, FaInstagram, FaRegCalendarCheck} from 'react-icons/fa';
import Logo from '../assets/bbLogo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center pt-3 px-4 bg-[#002C64] text-[#FCF2D4]'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '100px'}} />
        </div>

        {/*MENU*/}
        <ul className='hidden md:flex'>
            <li><Link to='home' smooth={true} duration={500}></Link>Home</li>
            <li><Link to='about' smooth={true} duration={500}></Link>About</li>
            <li><Link to='gallery' smooth={true} duration={500}></Link>Gallery</li>
            <li><Link to='store' smooth={true} duration={500}></Link>Store</li>
            <li><Link to='contact' smooth={true} duration={500}></Link>Calendar/Contact</li>
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
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F5BBED]'>
                    <a className='flex justify-between items-center w-full text-[#49443D]'
                    href="/">
                        Facebook <FaFacebook size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A9D586]'>
                    <a className='flex justify-between items-center w-full text-[#49443D]'
                    href="/">
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F5676A]'>
                    <a className='flex justify-between items-center w-full text-[#49443D]'
                    href="/">
                        Contact <FaRegCalendarCheck size={30} />
                    </a>
                </li>
        
            </ul>
        </div>
    </div>
  )
};

export default Navbar