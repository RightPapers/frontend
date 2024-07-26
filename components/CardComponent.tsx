import { Card } from './ui/card';

const CardComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className='flex h-fit w-full flex-col gap-8 rounded-[20px] p-8 shadow-lg'>
      {children}
    </Card>
  );
};

export default CardComponent;
