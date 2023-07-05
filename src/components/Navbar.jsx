import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/Logo.jpg';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='flex'>
        <img src={logo} alt="" className='rounded-md h-10 w-10'/>
        <h1 className='w-full text-3xl font-bold text-indigo-500'>Kabi Softwares</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
        </li>
        <li className='p-4  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
          <Link to="company" spy={true} smooth={true} offset={-100} duration={500} >Company</Link>
        </li>
        <li className='p-4  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
          <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
        </li>
        <li className='p-4  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-indigo-500 m-4'>Kabi Softwares.</h1>
          <li className='p-4 border-b border-gray-600  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className='p-4 border-b border-gray-600  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
            <Link to="company" spy={true} smooth={true} offset={-100} duration={500}>Company</Link>
          </li>
          <li className='p-4 border-b border-gray-600  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
            <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
          </li>
          <li className='p-4 border-b border-gray-600  hover:cursor-pointer hover:bg-indigo-400 hover:rounded-lg'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
