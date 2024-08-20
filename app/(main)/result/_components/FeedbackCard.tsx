'use client';

import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import FeedbackDialog from './FeedbackDialog';
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import TitleComponent from '@/components/TitleComponent';
import { RiQuestionnaireLine } from 'react-icons/ri';

const FeedbackCard = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col'>
      <div className='mb-[-7px]'>
        <TitleComponent>
          <div className='flex items-center gap-2'>
            <RiQuestionnaireLine size={24} />
            도움이 되었나요?
          </div>
        </TitleComponent>
      </div>
      <CardComponent>
        <div className='flex justify-around gap-4'>
          <Button
            variant='icon'
            className='bg-primary text-primary-foreground hover:bg-primary/90'
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
    </div>
  );
};

export default FeedbackCard;
