import { Button } from '@/components/ui/button';
import LinkHeader from './LinkHeader';
import { LoadingState } from '@/lib/types';
import MainInput from './MainInput';
import { Card } from '@/components/ui/card';

// TODO: POST 요청하는 함수로 수정
const fetchData = async () => {
  // 데이터 페칭이 15초 걸린다고 가정
  await new Promise((resolve) => setTimeout(resolve, 15000));
};

const LinkCard = ({
  setLoadingState,
}: {
  setLoadingState: (state: LoadingState) => void;
}) => {
  return (
    <Card className='flex h-fit w-full flex-col gap-8 rounded-[20px] p-8 shadow-lg'>
      <LinkHeader />
      <form className='flex flex-col gap-8'>
        <MainInput />
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
    </Card>
  );
};

export default LinkCard;
