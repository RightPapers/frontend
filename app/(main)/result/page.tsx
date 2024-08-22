'use client';

import FeedbackCard from './_components/FeedbackCard';
import SummaryCard from './_components/SummaryCard';
import ArticleCards from './_components/ArticleCards';
import { Gradient, Loading, ResultData } from '@/lib/types';
import AccuracyThumbnail from './_components/AccuracyThumbnail';
import { useResultStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useAccuracyStore } from '@/lib/AccuracyStore';
import { useLoadingStore } from '@/lib/LoadingStore';

const Result = ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const [gradient, setGradient] = useState<Gradient>();
  const [result, setResult] = useState<ResultData>();
  const setAccuracy = useAccuracyStore((state) => state.setAccuracy);
  const accuracy = useAccuracyStore((state) => state.accuracy);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const results = useResultStore.getState().results;

  useEffect(() => {
    const foundResult = searchParams.id
      ? results.find((result) => result.id === searchParams.id)
      : results[results.length - 1] || null;

    setResult(foundResult?.data);
    // done -> before: 뒤로가기 했을 때 로딩창이 아닌 메인페이지로 이동
    setLoading(Loading.before);
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

  useEffect(() => {
    if (result) {
      setAccuracy(
        Math.floor(100 - result.analysis_result.fake_probability * 100)
      );
    }
  }, [result, setAccuracy]);

  // TODO: 잘못된 ID로 접근하는 경우의 UI 추가
  if (!result) {
    return null;
  }

  const { analysis_result, related_articles, youtube_info } = result;

  return (
    <>
      <div
        className='absolute top-0 h-72 w-full'
        style={{
          backgroundImage: gradient,
        }}
      />
      <div className='absolute top-0 z-10 h-72 w-full bg-world-map-white' />
      <div className='flex flex-col gap-6 p-5'>
        <div className='z-10 line-clamp-2 text-4xl font-bold text-white'>
          {youtube_info.video_title}
        </div>
        <AccuracyThumbnail youtube_info={youtube_info} />
        <SummaryCard summary={analysis_result.summary} />
        <ArticleCards articles={related_articles} />
        <FeedbackCard video_id={youtube_info.video_id} />
      </div>
    </>
  );
};

export default Result;
