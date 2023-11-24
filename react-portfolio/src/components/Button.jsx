import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='flex px-4 py-1.5 justify-center items-center gap-8 bg-black rounded-xl text-white'>
      {children}
    </button>
  );
};

export default Button;