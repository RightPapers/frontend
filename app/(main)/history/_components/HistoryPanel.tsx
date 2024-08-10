import { YoutubeInfo } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const HistoryPanel = ({ history }: { history: YoutubeInfo }) => {
  return (
    <Link
      href={`/result?id=${history.video_id}`}
      key={history.video_id}
      className='flex w-full gap-4'
    >
      <Image
        src={history.thumbnails}
        alt={history.video_title}
        width={112}
        height={64}
        className='h-16 w-28 rounded-lg object-cover'
      />
      <div className='max-w-40 mobile:max-w-32'>
        <p className='line-clamp-2 text-sm font-bold'>{history.video_title}</p>
        <p className='line-clamp-1 text-xs'>{history.channel_title}</p>
      </div>
    </Link>
  );
};

export default HistoryPanel;
