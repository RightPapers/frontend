'use client';

import CardComponent from '@/components/CardComponent';
import TitleComponent from '@/components/TitleComponent';
import { Button } from '@/components/ui/button';
import { IoAnalytics } from 'react-icons/io5';
import { useState } from 'react';

const dummySummary = {
  summary:
    '이 영상은 일본에서 발생한 대규모 화산 폭발에 대한 긴급 속보를 다룹니다. 영상에서는 화산 폭발로 인한 피해 상황과 관련된 뉴스 클립, 현지 주민들의 인터뷰, 그리고 전문가들의 분석을 포함하고 있습니다. 화산재와 용암이 인근 지역에 미치는 영향, 긴급 대피 명령, 정부의 대응 조치 등이 상세히 소개됩니다. 또한, 이번 화산 폭발의 원인과 앞으로의 추가 폭발 가능성에 대해서도 다루며, 시청자들에게 안전 수칙과 주의 사항을 전달합니다.',
};

const SummaryCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col'>
      <div className='z-0 mb-[-7px]'>
        <TitleComponent accuracy={29}>
          <div className='flex'>
            <IoAnalytics className='relative top-[1px] mr-[9px] text-2xl' />
            chatGPT 영상 요약
          </div>
        </TitleComponent>
      </div>
      <div className='z-10 flex w-full justify-center'>
        <CardComponent>
          <div>
            <p
              className={`text-sm text-gray-900 ${isExpanded ? '' : 'line-clamp-2'}`}
            >
              {dummySummary.summary}
            </p>
          </div>
          <Button variant='more' onClick={toggleExpand}>
            <div className='text-center text-black'>
              <span className='text-orange-400'>{isExpanded ? '▲' : '▼'}</span>{' '}
              {isExpanded ? '접기' : '더보기'}
            </div>
          </Button>
        </CardComponent>
      </div>
    </div>
  );
};

export default SummaryCard;
