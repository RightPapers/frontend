import { Button } from '@/components/ui/button';
import CardComponent from '@/components/CardComponent';
import LinkHeader from './LinkHeader';
import { LoadingState, Result } from '@/lib/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField } from '@/components/ui/form';
import InputComponent from './InputComponent';
import { useResultStore } from '@/lib/store';

const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtu\.be|youtube\.com)/;

const formSchema = z.object({
  url: z.string().regex(youtubeUrlPattern, {
    message: '유효한 유튜브 링크를 입력해주세요.',
  }),
});

// TODO: 추후 Flask 서버로부터의 페칭으로 수정
const fetchData = async (
  url: string,
  addResult: (videoId: string, result: Result) => void
) => {
  const res = await fetch('api/analyze', {
    method: 'POST',
    body: JSON.stringify({ url }),
  });
  const result: Result = await res.json();
  addResult(result.youtube_info.video_id, result);
  // 데이터 페칭이 12초 걸린다고 가정
  await new Promise((resolve) => setTimeout(resolve, 12000));
};

const LinkComponent = ({
  setLoadingState,
}: {
  setLoadingState: (state: LoadingState) => void;
}) => {
  const { addResult } = useResultStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { url: '' },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoadingState(LoadingState.start);
    await fetchData(data.url, addResult);
    setLoadingState(LoadingState.done);
  };

  return (
    <CardComponent>
      <LinkHeader />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-8'
        >
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormControl>
                <div className='flex flex-col gap-1'>
                  <InputComponent field={field} />
                  {form.formState.errors.url && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors.url.message}
                    </p>
                  )}
                </div>
              </FormControl>
            )}
          />
          <Button variant='main' type='submit'>
            검색
          </Button>
        </form>
      </Form>
    </CardComponent>
  );
};

export default LinkComponent;
