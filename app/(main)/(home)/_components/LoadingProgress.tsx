'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import Logo from '@/public/assets/right-paper-logo.svg';
import { useRouter } from 'next/navigation';
import { LoadingState } from '@/lib/types';

const getRandomIntBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const points = [
  0,
  getRandomIntBetween(12, 17),
  getRandomIntBetween(27, 32),
  getRandomIntBetween(42, 47),
  getRandomIntBetween(57, 62),
  getRandomIntBetween(72, 77),
  getRandomIntBetween(87, 92),
  99,
];

export default function LoadingProgress({
  loadingState,
}: {
  loadingState: LoadingState;
}) {
  const [progress, setProgress] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    // fetching이 완료되면 99 -> 100
    if (loadingState === LoadingState.done) {
      setProgress(100);
      // 100%가 된 것을 1초 보여주고 result 페이지로 이동
      const timeout = setTimeout(() => {
        router.push('/result');
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (loadingState !== LoadingState.start) return;

    let index = 0;

    // 1.5초마다 points[index]로 progress를 증가시킴
    // 1.5 * 7 = 10.5초
    const interval = setInterval(() => {
      index++;
      setProgress(() => {
        if (index >= points.length) {
          clearInterval(interval);
          return 99;
        }
        return points[index];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [loadingState]);

  return (
    <div className='relative flex flex-col items-center text-center font-bold text-primary'>
      <span className='z-10'>
        <Logo />
      </span>
      <p className='text-[42px] leading-tight'>Right Paper</p>
      <p className='text-lg'>오직 올바른 정보만</p>
      <Progress
        value={progress}
        className='max-w-mobile my-6 bg-white shadow-lg'
      />
      <p>잠시만 기다려주세요</p>
      <p>AI 영상 분석 진행률: {progress}%</p>
      <div className='mt-16 text-[17px] font-extrabold text-blue-900'>
        <p>이 AI 모델의 결과는 참고용입니다</p>
        <p>검증되지 않은 정보는 신중하게 확인하세요</p>
      </div>
    </div>
  );
}
