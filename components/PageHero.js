import React from 'react';

const PageHero = () => {
  return (
    <div className='w-full h-[30vh]'>
      <img
        src='https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80'
        alt='/'
        className='w-full h-full object-cover'
      />
      <div className='absolute w-full h-[39vh] top-0 left-0 bg-gray-900/30'></div>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[20%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h2 className='text-4xl py-4 italic'>Login</h2>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
