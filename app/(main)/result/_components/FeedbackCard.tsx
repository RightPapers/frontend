'use client';

import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import FeedbackDialog from './FeedbackDialog';
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';

const FeedbackCard = () => {
  return (
    // TODO: CardComponent를 Result 페이지의 다른 컴포넌트로 교체
    <CardComponent>
      <div className='flex justify-between gap-4'>
        <Button
          variant='icon'
          onClick={() => {
            console.log('POST feedback');
          }}
        >
          <HiOutlineThumbUp className='absolute left-4' size={22} />네
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='icon'>
              <HiOutlineThumbDown className='absolute left-4' size={22} />
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
