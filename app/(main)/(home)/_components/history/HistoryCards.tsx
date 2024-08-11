'use client';

import HistoryCard from '@/components/HistoryCard';
import { useResultStore } from '@/lib/store';
import { YoutubeInfo } from '@/lib/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavigatorHeader from '../NavigatorHeader';

const HistoryCards = () => {
  const results = useResultStore((state) => state.results);
  const [histories, setHistories] = useState<YoutubeInfo[]>([]);

  useEffect(() => {
    results.slice(0, 2).map((result) => {
      setHistories((prev) => [...prev, result.data.youtube_info]);
    });
  }, [results]);

  return (
    <>
      {histories.length !== 0 && (
        <div className='flex flex-col'>
          <NavigatorHeader location='/history' linkText='전체 보기'>
            <p className='pl-4 font-extrabold text-primary'>검색 기록</p>
          </NavigatorHeader>
          <div className='flex h-max min-h-24 w-96 cursor-pointer items-center justify-around rounded-3xl bg-white p-4 shadow-md mobile:w-full mobile:gap-2'>
            {histories.slice(0, 2).map((history) => (
              <Link
                key={history.video_id}
                href={`/result?id=${history.video_id}`}
              >
                <HistoryCard {...history} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryCards;
