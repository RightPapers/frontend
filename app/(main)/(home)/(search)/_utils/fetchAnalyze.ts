import { baseUrl } from '@/lib/constants';
import { Loading, ResultData } from '@/lib/types';

export const fetchAnalyze = async (
  url: string,
  addResult: (video_id: string, result: ResultData) => void,
  toast: any,
  setLoading: (loading: Loading) => void
) => {
  try {
    const res = await fetch(`${baseUrl}/analyze`, {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('서버에서 오류가 발생했습니다.');
    } else {
      const result: ResultData = await res.json();
      addResult(result.youtube_info.video_id, result);
      setLoading(Loading.done);
    }
  } catch (error) {
    setLoading(Loading.before);
    toast({
      title: '영상 분석 실패',
      description: '잠시 후 다시 시도해주세요.',
      variant: 'destructive',
    });
  }
};
