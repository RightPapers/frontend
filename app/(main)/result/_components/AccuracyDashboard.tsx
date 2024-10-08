'use client';

import Dashboard from '@/public/assets/dashboard.svg';
import { cn } from '@/lib/utils';
import useAccuracyTheme from '../_hooks/useAccuracyTheme';
import { useAccuracyStore } from '@/lib/AccuracyStore';

const AccuracyDashboard = () => {
  const accuracy = useAccuracyStore((state) => state.accuracy);
  const { rotateDegree, resultText, dashboardColor } =
    useAccuracyTheme(accuracy);

  return (
    <div className='flex flex-col items-center'>
      <div className='relative flex h-44 w-48 items-center justify-center rounded-3xl bg-gray-300/80 pb-2'>
        <Dashboard />
        <span
          className='absolute inset-y-[45px] h-12 w-[3px] origin-bottom bg-red-500'
          style={{ transform: `rotate(${rotateDegree}deg)` }}
        />
        <span
          className={cn(
            'absolute inset-y-[116px] text-4xl font-semibold',
            dashboardColor.accuracy
          )}
        >
          {accuracy}
        </span>
      </div>
      <span
        className={cn(
          '-mb-4 flex h-11 w-52 -translate-y-4 items-center justify-center rounded-3xl bg-white text-sm font-extrabold',
          dashboardColor.resultText
        )}
        style={{ backgroundImage: dashboardColor.gradient }}
      >
        {resultText}
      </span>
    </div>
  );
};

export default AccuracyDashboard;
