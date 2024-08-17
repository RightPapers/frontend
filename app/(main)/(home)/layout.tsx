import { cn } from '@/lib/utils';
import React from 'react';

const background =
  'before:absolute before:inset-0 before:bg-world-map before:bg-top before:bg-no-repeat';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn('flex flex-col gap-8 mobile:px-2', background)}>
      {children}
    </div>
  );
};

export default Layout;
