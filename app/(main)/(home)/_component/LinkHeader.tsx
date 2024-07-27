'use client';
import { Button } from '@/components/ui/button';
import { FaYoutube } from 'react-icons/fa';
import { LiaAngleRightSolid } from 'react-icons/lia';

const LinkHeader = () => {
  return (
    <section className='flex items-center justify-between text-primary'>
      <div className='inline-flex items-center gap-1 font-semibold'>
        <FaYoutube fill='#FF0000' />
        링크를 입력해 주세요.
      </div>
      <Button variant='link'>
        링크 구하는 법
        <LiaAngleRightSolid />
      </Button>
    </section>
  );
};

export default LinkHeader;
