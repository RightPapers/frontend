'use client';

import { useEffect, useState } from 'react';
import Dashboard from '@/public/assets/dashboard.svg';
import { cn } from '@/lib/utils';

interface AccuracyDashboardProps {
  accuracy: number;
}

export default function AccuracyDashboard({
  accuracy,
}: AccuracyDashboardProps) {
  const initialDegree = -135;
  const [rotateDegree, setRotateDegree] = useState<number>(initialDegree);
  const [text, setText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  useEffect(() => {
    if (accuracy < 30) {
      setText('대체로 사실이 아닙니다');
      setTextColor('text-white');
      setBackgroundColor('bg-destructive');
    } else if (accuracy < 70) {
      setText('사실 여부 판별이 어렵습니다');
      setTextColor('text-black');
      setBackgroundColor('bg-secondary');
    } else {
      setText('대체로 사실입니다');
      setTextColor('text-white');
      setBackgroundColor('bg-primary');
    }
    // 0-100 -> -135 to 135
    const degree = (accuracy / 100) * initialDegree * -2 + initialDegree;
    setRotateDegree(degree);
  }, [accuracy]);

  return (
    <div className='flex flex-col items-center'>
      <div className='relative flex h-44 w-48 items-center justify-center rounded-3xl bg-gray-300/50 pb-2'>
        <Dashboard />
        <span
          className={cn(
            'absolute inset-y-[45px] h-12 w-[3px] origin-bottom bg-red-500'
            // `rotate-[${rotateDegree}deg]`
          )}
          style={{ transform: `rotate(${rotateDegree}deg)` }}
        />
        <span className='absolute inset-y-[120px] text-3xl font-bold'>
          {accuracy}
        </span>
      </div>
      <span
        className={cn(
          'flex h-10 w-52 -translate-y-4 items-center justify-center rounded-3xl text-sm font-bold',
          `${backgroundColor} ${textColor}`
        )}
      >
        {text}
      </span>
    </div>
  );
}
