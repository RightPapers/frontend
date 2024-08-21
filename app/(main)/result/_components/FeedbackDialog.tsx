import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  feedback_text: z.string().max(200),
});

const FeedbackDialog = ({
  setOpen,
  video_id,
}: {
  setOpen: (open: boolean) => void;
  video_id: string;
}) => {
  const { toast } = useToast();

  // TODO: 추후 Flask 서버로부터의 페칭으로 수정
  const fetchData = async (feedback_text: string) => {
    const res = await fetch('api/feedback', {
      method: 'POST',
      body: JSON.stringify({ video_id, feedback_text }),
    });
    console.log(await res.json());
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit, register, setValue } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    fetchData(data.feedback_text);
    toast({
      title: '의견 감사합니다!',
      description: '귀하의 의견이 성공적으로 전달되었습니다.',
    });
    setValue('feedback_text', '');
    setOpen(false);
  };

  return (
    <DialogContent className='max-w-mobile rounded-xl px-6 py-8 text-xs'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <DialogTitle className='text-2xl font-semibold'>
          Right Paper에 의견 보내기
        </DialogTitle>
        <DialogDescription className='text-xs'>
          정보가 도움이 되지 않았나요?
          <br />더 나은 서비스 제공을 위해 귀하의 의견을 듣고 싶습니다.
        </DialogDescription>
        <Textarea
          placeholder='제공된 정보에 대해 불만족스러운 부분이나 개선이 필요한 점이 있다면, 의견을 보내주시기 바랍니다.'
          className='h-32 text-xs'
          {...register('feedback_text')}
        />
        <p className='text-gray-400'>
          저희 웹사이트는 사용자로부터 개인 식별 정보를 수집하지 않습니다.
          제공해주신 의견은 서비스 개선을 위해 사용됩니다.
        </p>
        <Button variant='main' type='submit'>
          제출하기
        </Button>
      </form>
    </DialogContent>
  );
};

export default FeedbackDialog;
