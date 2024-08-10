'use client';

import CardComponent from '@/components/CardComponent';
import { Separator } from '@/components/ui/separator';
import { useResultStore } from '@/lib/store';
import { YoutubeInfo } from '@/lib/types';
import { useEffect, useState } from 'react';
import HistoryPanel from './_components/HistoryPanel';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const History = () => {
  const results = useResultStore((state) => state.results);
  const { deleteAllResults } = useResultStore();

  const [histories, setHistories] = useState<YoutubeInfo[]>([]);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  useEffect(() => {
    results.map((result) => {
      setHistories((prev) => [...prev, result.data.youtube_info]);
    });
  }, [results]);

  return (
    <CardComponent>
      <div className='flex justify-between'>
        <p className='font-bold text-primary'>전체 검색 기록</p>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger className='-mr-2'>
            <HiOutlineDotsVertical size={18} className='text-gray-600' />
          </PopoverTrigger>
          <PopoverContent className='w-36 p-0 text-center text-sm'>
            <div
              className='cursor-pointer rounded-md p-2 hover:bg-slate-50'
              onClick={() => {
                deleteAllResults();
                setHistories([]);
                setPopoverOpen(false);
              }}
            >
              전체 검색 기록 삭제
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {histories.length === 0 && (
        <p className='text-center text-sm text-gray-500'>
          검색 기록이 없습니다.
        </p>
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
