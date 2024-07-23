import HistoryCard from '@/components/HistoryCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LiaAngleRightSolid } from 'react-icons/lia';

// TODO: 로컬스토리지에서 데이터를 받아오도록 수정
const dummyHistory = [
  {
    video_title: '긴급속보 일본 화산 대폭발!당장 일본을 도망쳐야 한다!',
    channel_title: '페페TV',
    thumbnails: 'https://img.youtube.com/vi/FRqTqguKe6c/sddefault.jpg',
  },
  {
    video_title: '안냥하세요!!!',
    channel_title: '스토리 온',
    thumbnails: 'https://img.youtube.com/vi/u069h5Dm_JI/sddefault.jpg',
  },
];

// TODO: 로컬스토리지가 비어 있을 때의 UI 추가
export default function HistoryCards() {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <p className='pl-4 font-extrabold text-primary'>검색 기록</p>
        <Button variant='link' asChild>
          <Link href='/history'>
            전체 보기
            <LiaAngleRightSolid />
          </Link>
        </Button>
      </div>
      <div className='flex h-max w-96 cursor-pointer justify-around rounded-3xl bg-white p-4 shadow-md mobile:w-full'>
        {dummyHistory.slice(0, 2).map((history, index) => (
          // TODO: video_title을 id로 교체
          <Link key={index} href={`/result?title=${history.video_title}`}>
            <HistoryCard {...history} />
          </Link>
        ))}
      </div>
    </div>
  );
}
