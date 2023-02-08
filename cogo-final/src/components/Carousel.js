import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1628175806356-53c2b2734ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];







  return (
    <div className='max-w-[1000px] h-[500px] w-full mx-auto my-10 py-16 px-4 relative group'>
     <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-centre md:mt-0 mt-4">TOP COLLECTION✨</h1>
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      
    </div>
  );
}

export default Carousel;