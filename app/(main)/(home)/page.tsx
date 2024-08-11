'use client';

import { useState } from 'react';

import LoadingProgress from './_components/LoadingProgress';
import { LoadingState } from '@/lib/types';
import HistoryCards from './_components/history/HistoryCards';
import MainHeader from './_components/MainHeader';
import LinkCard from './_components/input/LinkCard';

const Home = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.before
  );

  return (
    <div className='flex flex-col gap-8'>
      <MainHeader />
      {loadingState === LoadingState.before ? (
        <>
          <LinkCard setLoadingState={setLoadingState} />
          <HistoryCards />
        </>
      ) : (
        <LoadingProgress loadingState={loadingState} />
      )}
    </div>
  );
};

export default Home;
