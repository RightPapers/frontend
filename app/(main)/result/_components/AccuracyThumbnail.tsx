import Image from 'next/image';
import AccuracyDashboard from './AccuracyDashboard';
import { YoutubeInfo } from '@/lib/types';

const AccuracyThumbnail = ({ youtube_info }: { youtube_info: YoutubeInfo }) => {
  const { thumbnails, video_title } = youtube_info;
  return (
    <div className='relative z-20 h-64 w-full overflow-hidden rounded-3xl'>
      <Image
        src={thumbnails}
        alt={video_title}
        width={352}
        height={256}
        className='w-full scale-150 object-cover'
      />
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <AccuracyDashboard />
      </div>
    </div>
  );
};

export default AccuracyThumbnail;
