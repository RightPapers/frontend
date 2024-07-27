import { Button } from '@/components/ui/button';
import InputComponent from './InputComponent';
import CardComponent from '@/components/CardComponent';
import LinkHeader from './LinkHeader';

const LinkComponent = () => {
  return (
    <CardComponent>
      <LinkHeader />
      <form className='flex flex-col gap-8'>
        <InputComponent />
        <Button variant='main'>검색</Button>
      </form>
    </CardComponent>
  );
};

export default LinkComponent;
