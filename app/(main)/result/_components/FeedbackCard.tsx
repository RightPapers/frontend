'use client';

import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import FeedbackDialog from './FeedbackDialog';
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

const FeedbackCard = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState<boolean>(false);
  return (
    // TODO: CardComponent를 Result 페이지의 다른 컴포넌트로 교체
    <CardComponent>
      <div className='flex justify-around gap-4'>
        <Button
          variant='icon'
          className=' bg-primary text-primary-foreground hover:bg-primary/90'
          onClick={() => {
            // TODO: API 연결
            toast({
              title: '감사합니다!',
              description: 'Right Paper를 이용해 주셔서 감사합니다.',
            });
          }}
        >
          <HiOutlineThumbUp size={22} />네
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant='icon'>
              <HiOutlineThumbDown size={22} />
              아니요
            </Button>
          </DialogTrigger>
          <FeedbackDialog setOpen={setOpen} />
        </Dialog>
      </div>
    </CardComponent>
  );
};

export default FeedbackCard;
