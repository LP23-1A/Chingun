import React from 'react';

const Tag = ({ children }) => {
  return (
    <div className='flex py-1 px-5 justify-center items-center rounded-xl bg-[color:var(--gray-200,#E5E7EB)] ;'>
      {children}
    </div>
  );
};

export default Tag;