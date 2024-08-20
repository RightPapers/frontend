'use client';

import { useEffect, useRef, useState } from 'react';
import LoadingProgress from './_components/LoadingProgress';
import HistoryCards from './_components/history/HistoryCards';
import LinkCard from './_components/input/LinkCard';
import HelpCard from './_components/help/HelpCard';
import { useAnimate } from 'framer-motion';
import { useLoadingStore } from '@/lib/LoadingStore';
import { Loading } from '@/lib/types';

const Home = () => {
  const loading = useLoadingStore((state) => state.loading);
  const isLoading = loading !== Loading.before;

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
    <div className='z-10'>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <div className='flex flex-col gap-6'>
          {showHelpModal ? (
            <HelpCard handleShowHelp={handleShowHelp} ref={scope} />
          ) : (
            <LinkCard handleShowHelp={handleShowHelp} ref={scope} />
          )}
          {!showHelpModal && <HistoryCards />}
        </div>
      )}
    </div>
  );
};

export default Home;
