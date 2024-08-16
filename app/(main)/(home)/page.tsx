'use client';

import { useEffect, useRef, useState } from 'react';
import LoadingProgress from './_components/LoadingProgress';
import { LoadingState } from '@/lib/types';
import HistoryCards from './_components/history/HistoryCards';
import MainHeader from './_components/MainHeader';
import LinkCard from './_components/input/LinkCard';
import HelpCard from './_components/help/HelpCard';
import { useAnimate } from 'framer-motion';

const Home = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.before
  );
  const isLoading = loadingState !== LoadingState.before;

  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const previousShowHelpModal = useRef(showHelpModal);
  const [scope, animate] = useAnimate();
  const handleShowHelp = () => {
    setShowHelpModal((prev) => !prev);
  };

  useEffect(() => {
    if (previousShowHelpModal.current !== showHelpModal) {
      animate(
        scope.current,
        {
          opacity: [0, 1],
        },
        { duration: 1 }
      );
    }
    previousShowHelpModal.current = showHelpModal;
  }, [showHelpModal, animate, scope]);

  return (
    <>
      {isLoading ? (
        <LoadingProgress loadingState={loadingState} />
      ) : (
        <>
          <MainHeader />
          {showHelpModal ? (
            <HelpCard handleShowHelp={handleShowHelp} ref={scope} />
          ) : (
            <LinkCard
              setLoadingState={setLoadingState}
              handleShowHelp={handleShowHelp}
              ref={scope}
            />
          )}
          {!showHelpModal && <HistoryCards />}
        </>
      )}
    </>
  );
};

export default Home;
