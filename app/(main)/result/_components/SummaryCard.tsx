'use client';

import CardComponent from '@/components/CardComponent';
import TitleComponent from '@/components/TitleComponent';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FiActivity } from 'react-icons/fi';

const ExpandButtonText = ({ arrow, text }: { arrow: string; text: string }) => {
  return (
    <p>
      <span className='text-orange-400'>{arrow}</span> {text}
    </p>
  );
};

const SummaryCard = ({ summary }: { summary: string }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col'>
      <div className='mb-[-7px]'>
        <TitleComponent>
          <div className='flex gap-2'>
            <FiActivity size={22} />
            chatGPT 영상 요약
          </div>
        </TitleComponent>
      </div>
      <CardComponent className='z-10 flex flex-col gap-3 pb-1 pt-6'>
        <p
          className={cn('text-sm text-gray-900', !isExpanded && 'line-clamp-2')}
        >
          {summary}
        </p>
        <Button variant='more' onClick={toggleExpand}>
          {isExpanded ? (
            <ExpandButtonText arrow='▲' text='접기' />
          ) : (
            <ExpandButtonText arrow='▼' text='더보기' />
          )}
        </Button>
      </CardComponent>
    </div>
  );
};

export default SummaryCard;
