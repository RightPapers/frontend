import { Button } from '@/components/ui/button';
import InputComponent from './InputComponent';
import CardComponent from '@/components/CardComponent';
import LinkHeader from './LinkHeader';
import { LoadingState } from '@/lib/types';

// TODO: POST 요청하는 함수로 수정
const fetchData = async () => {
  // 데이터 페칭이 15초 걸린다고 가정
  await new Promise((resolve) => setTimeout(resolve, 15000));
};

const LinkComponent = ({
  setLoadingState,
}: {
  setLoadingState: (state: LoadingState) => void;
}) => {
  return (
    <CardComponent>
      <LinkHeader />
      <form className='flex flex-col gap-8'>
        <InputComponent />
        <Button
          variant='main'
          onClick={async (e) => {
            e.preventDefault();
            setLoadingState(LoadingState.start);
            await fetchData();
            setLoadingState(LoadingState.done);
          }}
        >
          검색
        </Button>
      </form>
    </CardComponent>
  );
};

export default LinkComponent;
