'use client';

import FeedbackCard from './_components/FeedbackCard';
import SummaryCard from './_components/SummaryCard';
import ArticleCards from './_components/ArticleCards';
import { useResultStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import type { Result } from '@/lib/types';
import AccuracyThumbnail from './_components/AccuracyThumbnail';

const Result = ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    const id = searchParams.id;
    const results = useResultStore.getState().results;

    const foundResult = id
      ? results.find((result) => result.id === id)
      : results[results.length - 1] || null;

    setResult(foundResult?.data);
  }, [searchParams]);

  // TODO: 잘못된 ID로 접근하는 경우의 UI 추가
  if (!result) {
    return null;
  }

  const { analysis_result, related_articles, youtube_info } = result;
  const accuracy = 100 - analysis_result.fake_possibility;

  return (
    <div className='p-5 flex flex-col gap-6'>
      <div className='line-clamp-2 text-4xl font-bold text-white z-10'>
        {youtube_info.video_title}
      </div>
      <AccuracyThumbnail accuracy={accuracy} youtube_info={youtube_info} />
      <SummaryCard accuracy={accuracy} summary={analysis_result.summary} />
      <ArticleCards accuracy={accuracy} articles={related_articles} />
      <FeedbackCard accuracy={accuracy} />
    </div>
  );
};

export default Result;
