import { Card } from './ui/card';

const CardComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className='h-fit w-full gap-7 rounded-[20px] p-8 shadow-lg'>
      {children}
    </Card>
  );
};

export default CardComponent;
