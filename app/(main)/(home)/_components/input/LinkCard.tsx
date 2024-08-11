import { Button } from '@/components/ui/button';

import { LoadingState } from '@/lib/types';
import MainInput from './MainInput';
import { Card } from '@/components/ui/card';
import NavigatorHeader from '../NavigatorHeader';
import { FaYoutube } from 'react-icons/fa';

// TODO: POST 요청하는 함수로 수정
const fetchData = async () => {
  // 데이터 페칭이 15초 걸린다고 가정
  await new Promise((resolve) => setTimeout(resolve, 15000));
};

const LinkCard = ({
  setLoadingState,
}: {
  setLoadingState: (state: LoadingState) => void;
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingState(LoadingState.start);
    await fetchData();
    setLoadingState(LoadingState.done);
  };

  return (
    <Card className='flex h-fit w-full flex-col gap-8 rounded-[20px] p-8 shadow-lg'>
      <NavigatorHeader location='/' linkText='링크 구하는 법'>
        <div className='inline-flex items-center gap-1 font-semibold'>
          <FaYoutube fill='#FF0000' />
          링크를 입력해주세요
        </div>
      </NavigatorHeader>
      <form className='flex flex-col gap-8'>
        <MainInput />
        <Button variant='main' onClick={handleSubmit}>
          검색
        </Button>
      </form>
    </Card>
  );
};

export default LinkCard;
