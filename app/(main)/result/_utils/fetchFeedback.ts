import { UseFormSetValue } from 'react-hook-form';

// TODO: 추후 Flask 서버로부터의 페칭으로 수정
export const fetchFeedback = async (
  video_id: string,
  feedback_text: string,
  setValue: UseFormSetValue<{ feedback_text: string }>,
  toast: any
) => {
  try {
    const res = await fetch('api/feedback', {
      method: 'POST',
      body: JSON.stringify({ video_id, feedback_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('서버에서 오류가 발생했습니다.');
    } else {
      toast({
        title: '의견 감사합니다!',
        description: '귀하의 의견이 성공적으로 전달되었습니다.',
      });
      setValue('feedback_text', '');
    }
  } catch (error) {
    toast({
      title: '의견 전송 실패',
      description: '잠시 후 다시 시도해주세요.',
      variant: 'destructive',
    });
  }
};
