import { Button } from '@/components/ui/button';
import InputComponent from './InputComponent';
import CardComponent from '@/components/CardComponent';
import MainButton from '@/components/MainButton';

const LinkComponent = () => {
  return (
    <CardComponent>
      <form className='flex w-full flex-col gap-6'>
        <InputComponent />
        <MainButton variant='main'>검색</MainButton>
      </form>
    </CardComponent>
  );
};

export default LinkComponent;
