'use client';

import CardComponent from '@/components/CardComponent';
import { Separator } from '@/components/ui/separator';
import { useResultStore } from '@/lib/store';
import { YoutubeInfo } from '@/lib/types';
import { useEffect, useState } from 'react';
import HistoryPanel from './_components/HistoryPanel';

const History = () => {
  const results = useResultStore((state) => state.results);
  const [histories, setHistories] = useState<YoutubeInfo[]>([]);

  useEffect(() => {
    results.map((result) => {
      setHistories((prev) => [...prev, result.data.youtube_info]);
    });
  }, [results]);

  return (
    <CardComponent className='gap-4'>
      <p className='font-bold text-primary'>전체 검색 기록</p>
      {histories.map((history, index) => (
        <div className='flex flex-col'>
          <HistoryPanel history={history} />
          {index < histories.length - 1 && <Separator className='mt-4' />}
        </div>
      ))}
    </CardComponent>
  );
};

export default History;
