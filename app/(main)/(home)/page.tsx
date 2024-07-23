import HistoryCard from '@/components/HistoryCard';

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

export default function Home() {
  return (
    <div className='flex w-[385px] mobile:w-full items-center bg-white'>
      <div className='flex w-full justify-around'>
        {dummyHistory.slice(0, 2).map((history, index) => {
          return <HistoryCard key={index} {...history} />;
        })}
      </div>
    </div>
  );
}
