import { Button } from '@/components/ui/button';
import CardComponent from '@/components/CardComponent';
import { Loading } from '@/lib/types';
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
import { fetchAnalyze } from '../../_utils/fetchAnalyze';
import { analyzeSchema } from '../../_utils/analyzeSchema';
import { useToast } from '@/components/ui/use-toast';

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

    const { toast } = useToast();

    const form = useForm<z.infer<typeof analyzeSchema>>({
      resolver: zodResolver(analyzeSchema),
      defaultValues: { url: '' },
    });

    const onSubmit = async (data: z.infer<typeof analyzeSchema>) => {
      setLoading(Loading.start);
      await fetchAnalyze(data.url, addResult, toast, setLoading);
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
