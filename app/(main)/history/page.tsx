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
    <CardComponent>
      <p className='font-bold text-primary'>전체 검색 기록</p>
      {histories.length === 0 && (
        <p className='text-center text-gray-500 text-sm'>검색 기록이 없습니다.</p>
      )}
      <div className='scrollbar-hide max-h-96 overflow-scroll'>
        {histories.map((history, index) => (
          <div className='flex flex-col'>
            <HistoryPanel {...history} />
            {index < histories.length - 1 && <Separator className='my-3' />}
          </div>
        ))}
      </div>
    </CardComponent>
  );
};

export default History;
