'use client';

import { useState } from 'react';
import LinkComponent from './_components/LinkComponent';
import LoadingProgress from './_components/LoadingProgress';
import { LoadingState } from '@/lib/types';
import HistoryCards from './_components/HistoryCards';

const Home = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.before
  );

  return (
    <>
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
