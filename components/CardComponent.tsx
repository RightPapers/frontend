import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { forwardRef } from 'react';

const CardComponent = forwardRef(
  (
    {
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string | undefined;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'flex h-fit w-full flex-col gap-8 rounded-[20px] p-8 shadow-lg',
          className
        )}
      >
        {children}
      </Card>
    );
  }
);

export default CardComponent;
