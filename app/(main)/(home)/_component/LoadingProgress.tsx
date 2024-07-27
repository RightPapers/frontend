'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import Logo from '@/public/assets/right-paper-logo.svg';

const getRandomIntBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function LoadingProgress({
  start,
  done,
}: {
  start: boolean;
  done: boolean;
}) {
  const [progress, setProgress] = useState<number>(0);
  const points = [
    getRandomIntBetween(12, 17),
    getRandomIntBetween(27, 32),
    getRandomIntBetween(42, 47),
    getRandomIntBetween(57, 62),
    getRandomIntBetween(72, 77),
    getRandomIntBetween(87, 92),
    99,
  ];

  useEffect(() => {
    if (done) {
      setProgress(100);
    }
  }, [done]);

  useEffect(() => {
    if (!start) return;

    let index = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (index >= points.length) {
          clearInterval(interval);
          return prev;
        }
        const point = points[index];
        if (prev < point) {
          return point;
        } else {
          index++;
          if (index >= points.length) {
            clearInterval(interval);
            return prev;
          }
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className='flex flex-col items-center text-primary'>
      <Logo />
      <p className='text-4xl font-semibold'>Right Paper</p>
      <p className='text-lg font-extrabold'>오직 올바른 정보만</p>
      <Progress value={progress} className='bg-white shadow-lg' />
      <p className='font-bold'>잠시만 기다려주세요.</p>
      <p className='font-bold'>{progress}</p>
    </div>
  );
}
