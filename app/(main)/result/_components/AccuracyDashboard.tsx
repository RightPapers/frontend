'use client';

import { useEffect, useState } from 'react';
import Dashboard from '@/public/assets/dashboard.svg';
import { cn } from '@/lib/utils';

interface AccuracyDashboardProps {
  accuracy: number;
}

interface DashboardColor {
  accuracy: string;
  resultText: string;
  background: string;
}

const AccuracyDashboard = ({ accuracy }: AccuracyDashboardProps) => {
  const initialDegree = -135;
  const [rotateDegree, setRotateDegree] = useState<number>(initialDegree);
  const [resultText, setResultText] = useState<string>('');
  const [dashboardColor, setDashboardColor] = useState<DashboardColor>({
    accuracy: '',
    resultText: '',
    background: '',
  });

  useEffect(() => {
    if (accuracy < 30) {
      setResultText('대체로 사실이 아닙니다');
      setDashboardColor({
        accuracy: 'text-destructive',
        resultText: 'text-white',
        background: 'bg-destructive',
      });
    } else if (accuracy <= 70) {
      setResultText('사실 여부 판별이 어렵습니다');
      setDashboardColor({
        accuracy: 'text-black',
        resultText: 'text-black',
        background: 'bg-secondary',
      });
    } else {
      setResultText('대체로 사실입니다');
      setDashboardColor({
        accuracy: 'text-primary',
        resultText: 'text-white',
        background: 'bg-primary',
      });
    }
    // 0 ~ 100 -> -135 ~ 135 (accuracy -> rotateDegree)
    const degree = (accuracy / 100) * initialDegree * -2 + initialDegree;
    setRotateDegree(degree);
  }, [accuracy]);

  return (
    <div className='flex flex-col items-center'>
      <div className='relative flex h-44 w-48 items-center justify-center rounded-3xl bg-gray-300/70 pb-2'>
        <Dashboard />
        <span
          className='absolute inset-y-[45px] h-12 w-[3px] origin-bottom bg-red-500'
          style={{ transform: `rotate(${rotateDegree}deg)` }}
        />
        <span
          className={cn(
            'absolute inset-y-[120px] text-3xl font-bold',
            dashboardColor.accuracy
          )}
        >
          {accuracy}
        </span>
      </div>
      <span
        className={cn(
          'flex h-10 w-52 -translate-y-4 items-center justify-center rounded-3xl text-sm font-bold',
          dashboardColor.resultText,
          dashboardColor.background
        )}
      >
        {resultText}
      </span>
    </div>
  );
};

export default AccuracyDashboard;
