import { YoutubeInfo } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const HistoryPanel = (history: YoutubeInfo) => {
  const { video_id, thumbnails, video_title, channel_title } = history;
  return (
    <Link
      href={`/result?id=${video_id}`}
      key={video_id}
      className='flex w-full gap-4'
    >
      <Image
        src={thumbnails}
        alt={video_title}
        width={112}
        height={64}
        className='h-16 w-28 rounded-lg object-cover'
      />
      <div className='max-w-40 mobile:max-w-32'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='w-full'>
              <p className='line-clamp-2 text-left text-sm font-bold'>
                {video_title}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-xs font-medium'>{video_title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className='line-clamp-1 text-xs'>{channel_title}</p>
      </div>
    </Link>
  );
};

export default HistoryPanel;
