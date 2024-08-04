import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const CardComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) => {
  return (
    <Card
      className={cn(
        'flex h-fit w-full flex-col gap-8 rounded-[20px] p-8 shadow-lg',
        className
      )}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
