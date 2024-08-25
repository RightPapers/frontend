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
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

const FeedbackCard = ({ video_id }: { video_id: string }) => {
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
            onClick={() => {
              toast({
                title: '감사합니다!',
                description: 'Right Paper를 이용해 주셔서 감사합니다.',
              });
            }}
          >
            <FaRegThumbsUp
              size={22}
              className='absolute left-5 mobile:left-4'
            />
            <p className='absolute right-10 mobile:right-8'>네</p>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant='icon'>
                <FaRegThumbsDown
                  size={22}
                  className='absolute left-5 mobile:left-4'
                />
                <p className='absolute right-6 mobile:right-4'>아니요</p>
              </Button>
            </DialogTrigger>
            <FeedbackDialog setOpen={setOpen} video_id={video_id} />
          </Dialog>
        </div>
      </CardComponent>
    </div>
  );
};

export default FeedbackCard;
