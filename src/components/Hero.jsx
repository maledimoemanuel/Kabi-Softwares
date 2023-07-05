import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white' id='hero'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-7xl sm:text-6xl text-indigo-500 font-bold p-2'>
          Diminish Digital Divide
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Reliable services for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Hardware', 'Software', 'And More']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className='bg-indigo-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
