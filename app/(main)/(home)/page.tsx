'use client';

import { useState } from 'react';
import LinkComponent from './_components/input/LinkComponent';
import LoadingProgress from './_components/LoadingProgress';
import { LoadingState } from '@/lib/types';
import HistoryCards from './_components/history/HistoryCards';
import MainHeader from './_components/MainHeader';

const Home = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.before
  );

  return (
    <>
      <MainHeader />
      {loadingState === LoadingState.before ? (
        <>
          <LinkComponent setLoadingState={setLoadingState} />
          <HistoryCards />
        </>
      ) : (
        <LoadingProgress loadingState={loadingState} />
      )}
    </>
  );
};

export default Home;
