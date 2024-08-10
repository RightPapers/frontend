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
import { useResultStore } from '@/lib/store';
import { YoutubeInfo } from '@/lib/types';

const DeleteDialog = ({
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

export default DeleteDialog;
