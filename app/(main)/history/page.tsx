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
import { IoCloseOutline } from 'react-icons/io5';
import DeleteDialog from './_components/DeleteDialog';
import { motion, AnimatePresence } from 'framer-motion';

const History = () => {
  const results = useResultStore((state) => state.results);
  const { deleteResult } = useResultStore();
  const [histories, setHistories] = useState<YoutubeInfo[]>([]);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const histories = results.map((result) => result.data.youtube_info);
    setHistories(histories);
  }, [results]);

  const handleDelete = (videoId: string) => {
    setIsAnimating(true);
    deleteResult(videoId);
    setHistories((prev) => prev.filter((item) => item.video_id !== videoId));
  };

  return (
    <CardComponent>
      <div className='flex justify-between'>
        <p className='font-bold text-primary'>전체 검색 기록</p>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger className='-mr-2'>
            <HiOutlineDotsVertical size={18} className='text-gray-600' />
          </PopoverTrigger>
          <PopoverContent
            align={'end'}
            className='-mr-2 w-36 p-0 text-center text-sm'
          >
            <DeleteDialog
              setOpen={setPopoverOpen}
              setHistories={setHistories}
              setIsAnimating={setIsAnimating}
            />
          </PopoverContent>
        </Popover>
      </div>

      {!isAnimating && histories.length === 0 && (
        <p className='text-center text-sm text-gray-500'>
          검색 기록이 없습니다.
        </p>
      )}
      <div className='max-h-96 overflow-scroll scrollbar-hide'>
        <AnimatePresence
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {histories.map((history, index) => (
            <motion.div
              key={history.video_id}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className='flex flex-col'
            >
              <div className='relative'>
                <HistoryPanel {...history} />
                <IoCloseOutline
                  className='absolute -right-1 top-0 z-10 cursor-pointer text-gray-400'
                  size={20}
                  onClick={() => handleDelete(history.video_id)}
                />
              </div>
              {index < histories.length - 1 && <Separator className='my-3' />}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </CardComponent>
  );
};

export default History;
