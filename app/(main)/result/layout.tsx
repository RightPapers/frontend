import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='relative'>{children}</div>;
};

export default Layout;
