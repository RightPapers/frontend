'use client';

import FeedbackCard from './_components/FeedbackCard';
import SummaryCard from './_components/SummaryCard';
import ArticleCards from './_components/ArticleCards';
import { Gradient, Result } from '@/lib/types';
import AccuracyThumbnail from './_components/AccuracyThumbnail';
import { useResultStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useAccuracyStore } from '@/lib/AccuracyStore';

const Result = ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const [gradient, setGradient] = useState<Gradient>();
  const [result, setResult] = useState<Result>();
  const setAccuracy = useAccuracyStore((state) => state.setAccuracy);
  const accuracy = useAccuracyStore((state) => state.accuracy);

  useEffect(() => {
    const results = useResultStore.getState().results;

    const foundResult = searchParams.id
      ? results.find((result) => result.id === searchParams.id)
      : results[results.length - 1] || null;

    setResult(foundResult?.data);
  }, [searchParams.id]);

  useEffect(() => {
    if (accuracy < 30) {
      setGradient(Gradient.red);
    } else if (accuracy <= 70) {
      setGradient(Gradient.orange);
    } else {
      setGradient(Gradient.blue);
    }
  }, [accuracy]);

  // TODO: 잘못된 ID로 접근하는 경우의 UI 추가
  if (!result) {
    return null;
  }

  setAccuracy(100 - result.analysis_result.fake_probability);

  const { analysis_result, related_articles, youtube_info } = result;

  return (
    <>
      <div
        className='absolute top-0 h-72 w-full bg-world-map-white'
        style={{
          backgroundImage: gradient,
        }}
      />
      <div className='flex flex-col gap-6 p-5'>
        <div className='z-10 line-clamp-2 text-4xl font-bold text-white'>
          {youtube_info.video_title}
        </div>
        <AccuracyThumbnail youtube_info={youtube_info} />
        <SummaryCard summary={analysis_result.summary} />
        <ArticleCards articles={related_articles} />
        <FeedbackCard />
      </div>
    </>
  );
};

export default Result;
