import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <div className='bg-blue-400 absolute top-0 h-72 w-full bg-world-map-white' />
      {children}
    </div>
  );
};

export default Layout;
