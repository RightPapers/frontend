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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const DeleteAlertDialog = ({
  setOpen,
  setHistories,
}: {
  setOpen: (value: boolean) => void;
  setHistories: (value: YoutubeInfo[]) => void;
}) => {
  const { deleteAllResults } = useResultStore();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className='cursor-pointer rounded-md p-2 hover:bg-slate-50'>
          전체 검색 기록 삭제
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='w-96 rounded-xl'>
        <AlertDialogHeader className='text-left'>
          <AlertDialogTitle>검색 기록을 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            모든 검색 기록이 삭제되며 복구할 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex-row items-center justify-end gap-2'>
          <AlertDialogCancel
            className='m-0'
            onClick={() => {
              setOpen(false);
            }}
          >
            취소
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              deleteAllResults();
              setHistories([]);
              setOpen(false);
            }}
            className='bg-red-600 text-white hover:bg-red-600/80'
          >
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const History = () => {
  const results = useResultStore((state) => state.results);

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
          <PopoverContent
            align={'end'}
            className='-mr-2 w-36 p-0 text-center text-sm'
          >
            <DeleteAlertDialog
              setOpen={setPopoverOpen}
              setHistories={setHistories}
            />
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
          <div className='flex flex-col' key={index}>
            <HistoryPanel {...history} />
            {index < histories.length - 1 && <Separator className='my-3' />}
          </div>
        ))}
      </div>
    </CardComponent>
  );
};

export default History;
