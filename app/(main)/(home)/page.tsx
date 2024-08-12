'use client';

import { useState } from 'react';
import LoadingProgress from './_components/LoadingProgress';
import { LoadingState } from '@/lib/types';
import HistoryCards from './_components/history/HistoryCards';
import MainHeader from './_components/MainHeader';
import LinkCard from './_components/input/LinkCard';
import HelpCard from './_components/help/HelpCard';

const Home = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.before
  );

  return (
    <>
      {loadingState === LoadingState.before ? (
        <>
          <MainHeader />
          <LinkCard setLoadingState={setLoadingState} />
          <HistoryCards />
          <HelpCard />
        </>
      ) : (
        <LoadingProgress loadingState={loadingState} />
      )}
    </>
  );
};

export default Home;
