import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import {Link} from 'react-scroll'

const Footer = () => {
  const handleClick=()=>{
    alert("We currently have no open positions")
  }
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-3white'>
      <div>
        <p className='py-4'>Thank you for visiting our website. If you have any questions or feedback, please don't hesitate to reach out to us. We appreciate your support!</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href='https://www.facebook.com/profile.php?id=100064604415913'><FaFacebookSquare size={30} /></a>
            <a href='https://instagram.com/kabimakobe?igshid=NTc4MTIwNjQ2YQ=='><FaInstagram size={30} /></a>
            <a href='https://wa.me/27726984341'><FaWhatsapp size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Hardware</li>
            <li className='py-2 text-sm'>Software</li>
            <li className='py-2 text-sm'>Logo Design</li>
            <li className='py-2 text-sm'>Tech</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm hover:cursor-pointer'><Link  to='about'>About</Link></li>
            <li className='py-2 text-sm hover:cursor-pointer' onClick={handleClick}>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Contact</h6>
        <ul>
            <li className='py-2 text-sm'><a href="tel:+27648058320">+27 64 805 8320</a></li>
            <li className='py-2 text-sm'><a href="mailto:khutjisho072@gmail.com">khutjisho072@gmail.com</a></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
