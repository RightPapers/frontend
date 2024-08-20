'use client';

import { useLoadingStore } from '@/lib/LoadingStore';
import { Loading } from '@/lib/types';
import { cn } from '@/lib/utils';
import Logo from '@/public/assets/right-paper-logo-blue.svg';

const MainHeader = () => {
  const loading = useLoadingStore((state) => state.loading);
  const isLoading = loading !== Loading.before;
  return (
    <header
      className={cn(
        'flex justify-between p-2 text-primary',
        isLoading && 'hidden'
      )}
    >
      <Logo />
      <div>
        <h1 className='whitespace-nowrap text-[42px] font-semibold'>
          Right Paper
        </h1>
        <p>오직 올바른 정보만</p>
      </div>
    </header>
  );
};

export default MainHeader;
