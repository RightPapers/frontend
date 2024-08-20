import { Button } from '@/components/ui/button';
import CardComponent from '@/components/CardComponent';
import { Loading, Result } from '@/lib/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField } from '@/components/ui/form';

import { useResultStore } from '@/lib/store';

import { FaYoutube } from 'react-icons/fa';
import NavigatorHeader from '../NavigatorHeader';
import MainInput from './MainInput';
import { forwardRef } from 'react';
import { useLoadingStore } from '@/lib/LoadingStore';

const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtu\.be|youtube\.com)/;

const formSchema = z.object({
  url: z.string().regex(youtubeUrlPattern, {
    message: '유효한 유튜브 링크를 입력해주세요.',
  }),
});

// TODO: 추후 Flask 서버로부터의 페칭으로 수정
const fetchData = async (
  url: string,
  addResult: (video_id: string, result: Result) => void
) => {
  const res = await fetch('api/analyze', {
    method: 'POST',
    body: JSON.stringify({ url }),
  });
  const result: Result = await res.json();
  addResult(result.youtube_info.video_id, result);
  // 데이터 페칭이 6초 ~ 15초 사이 랜덤하게 걸린다고 가정
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 9000 + 6000)
  );
};

const LinkComponent = forwardRef(
  (
    {
      handleShowHelp,
    }: {
      handleShowHelp: () => void;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { addResult } = useResultStore();
    const setLoading = useLoadingStore((state) => state.setLoading);

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: { url: '' },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setLoading(Loading.start);
      await fetchData(data.url, addResult);
      setLoading(Loading.done);
    };

    return (
      <CardComponent ref={ref}>
        <NavigatorHeader linkText='링크 구하는 법' handleClick={handleShowHelp}>
          <div className='inline-flex items-center gap-2 text-sm font-extrabold'>
            <FaYoutube fill='#FF0000' size={26} />
            링크를 입력해주세요
          </div>
        </NavigatorHeader>
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
                    <MainInput field={field} />
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
  }
);

LinkComponent.displayName = 'LinkComponent';

export default LinkComponent;
