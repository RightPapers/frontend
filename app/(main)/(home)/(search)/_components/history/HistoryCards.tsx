'use client';

import HistoryCard from '@/components/HistoryCard';
import { useResultStore } from '@/lib/store';
import { YoutubeInfo } from '@/lib/types';
import { useEffect, useState } from 'react';
import NavigatorHeader from '../NavigatorHeader';
import { cn } from '@/lib/utils';
import CardComponent from '@/components/CardComponent';

const HistoryCards = () => {
  const results = useResultStore((state) => state.results);
  const [histories, setHistories] = useState<YoutubeInfo[]>([]);

  useEffect(() => {
    if (results.length >= 2) {
      const lastTwoResults = results
        .slice(-2)
        .reverse()
        .map((result) => result.data.youtube_info);
      setHistories(lastTwoResults);
    } else if (results.length === 1) {
      setHistories([results[0].data.youtube_info]);
    }
  }, [results]);

  return (
    <>
      {histories.length !== 0 && (
        <div className='flex flex-col'>
          <NavigatorHeader location='/history' linkText='전체 보기'>
            <p className='pl-4 font-extrabold text-primary'>검색 기록</p>
          </NavigatorHeader>
          <CardComponent
            className={cn(
              'flex-row items-center mobile:gap-2 mobile:p-6',
              histories.length === 1 ? 'justify-start' : 'justify-around'
            )}
          >
            {histories.map((history, index) => (
              <HistoryCard {...history} key={index} />
            ))}
          </CardComponent>
        </div>
      )}
    </>
  );
};

export default HistoryCards;
