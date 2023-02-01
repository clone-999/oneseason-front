import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Booking from './Booking';

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <video
        className='w-full h-full object-cover'
        src="/assets/motorboat.mp4"
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h2 className='py-4 text-2xl'>Find Your Next Stay</h2>
        <div className="w-2/3 mx-auto shadow-md rounded-md p-4 bg-slate-100 bg-opacity-25">
            <Booking color={true}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
