import { Button } from '@/components/ui/button';
import InputComponent from './InputComponent';
import CardComponent from '@/components/CardComponent';
import MainButton from '@/components/MainButton';
import LinkHeader from './LinkHeader';

const LinkComponent = () => {
  return (
    <CardComponent>
      <LinkHeader />
      <form className='flex flex-col gap-8'>
        <InputComponent />
        <MainButton variant='main'>검색</MainButton>
      </form>
    </CardComponent>
  );
};

export default LinkComponent;
