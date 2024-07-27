'use client';

import { useEffect, useState } from 'react';
import LinkComponent from './_component/LinkComponent';
import { useRouter } from 'next/navigation';
import LoadingProgress from './_component/LoadingProgress';

enum LoadingState {
  before,
  start,
  done,
}

export default function Home() {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.before
  );

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a 15-second server request
        await new Promise((resolve) => setTimeout(resolve, 15000));
        setLoadingState(LoadingState.done);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (loadingState === LoadingState.done) {
      const timeout = setTimeout(() => {
        router.push('/result');
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [loadingState]);

  useEffect(() => {
    if (loadingState === LoadingState.before) {
      setLoadingState(LoadingState.start);
    }
  }, []);

  return (
    <>
      {loadingState === LoadingState.before ? (
        <LinkComponent />
      ) : (
        <LoadingProgress
          start={loadingState === LoadingState.start}
          done={loadingState === LoadingState.done}
        />
      )}
    </>
  );
}
