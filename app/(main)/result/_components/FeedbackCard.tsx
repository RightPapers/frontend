'use client';

import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6';

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
        <Button
          variant='icon'
          onClick={() => {
            console.log('아니요');
          }}
        >
          <FaRegThumbsDown className='absolute left-4' size={18} />
          아니요
        </Button>
      </div>
    </CardComponent>
  );
};

export default FeedbackCard;
