import CardComponent from '@/components/CardComponent';
import HelpImage1 from '@/public/assets/help_1.svg';
import HelpImage2 from '@/public/assets/help_2.svg';
import NavigatorHeader from '../NavigatorHeader';
import { FaYoutube } from 'react-icons/fa';
import { forwardRef, Fragment } from 'react';
import { Button } from '@/components/ui/button';

const HelpConfig = [
  { title: '1. 동영상 아래의 공유 버튼을 클릭합니다.', image: HelpImage1 },
  { title: '2. 링크 복사 버튼을 클릭하세요.', image: HelpImage2 },
];

const HelpCard = forwardRef(
  (
    {
      handleShowHelp,
    }: {
      handleShowHelp: () => void;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <CardComponent ref={ref}>
        <NavigatorHeader>
          <div className='inline-flex items-center gap-1 font-extrabold'>
            <FaYoutube fill='#FF0000' />
            동영상 URL 복사
          </div>
        </NavigatorHeader>
        {HelpConfig.map((config, index) => (
          <div key={index}>
            <span>{config.title}</span>
            <config.image />
          </div>
        ))}
        <Button variant='main' type='submit' onClick={handleShowHelp}>
          링크 입력하기
        </Button>
      </CardComponent>
    );
  }
);

export default HelpCard;
