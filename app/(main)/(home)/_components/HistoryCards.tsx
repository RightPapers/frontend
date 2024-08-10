'use client';

import HistoryCard from '@/components/HistoryCard';
import { Button } from '@/components/ui/button';
import { useResultStore } from '@/lib/store';
import { YoutubeInfo } from '@/lib/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';

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
          <div className='flex items-center justify-between'>
            <p className='pl-4 font-extrabold text-primary'>검색 기록</p>
            <Button variant='link' asChild>
              <Link href='/history'>
                전체 보기
                <LiaAngleRightSolid />
              </Link>
            </Button>
          </div>
          <div className='flex h-max min-h-24 w-96 cursor-pointer items-center justify-around rounded-3xl bg-white p-4 shadow-md mobile:w-full mobile:gap-2'>
            {histories.map((history, index) => (
              <HistoryCard {...history} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryCards;
