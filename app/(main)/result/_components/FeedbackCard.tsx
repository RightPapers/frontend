'use client';

import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6';
import {
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';
import FeedbackDialog from './FeedbackDialog';

const FeedbackCard = () => {
  return (
    // TODO: CardComponent를 Result 페이지의 다른 컴포넌트로 교체
    <CardComponent>
      <div className='flex justify-between gap-4'>
        <Button
          variant='icon'
          onClick={() => {
            console.log('네');
          }}
        >
          <FaRegThumbsUp className='absolute left-4' size={18} />네
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='icon'>
              <FaRegThumbsDown className='absolute left-4' size={18} />
              아니요
            </Button>
          </DialogTrigger>
          <FeedbackDialog />
        </Dialog>
      </div>
    </CardComponent>
  );
};

export default FeedbackCard;
