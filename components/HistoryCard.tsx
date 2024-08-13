import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { YoutubeInfo } from '@/lib/types';
import Link from 'next/link';

const HistoryCard = (history: YoutubeInfo) => {
  const { video_id, thumbnails, video_title, channel_title } = history;
  return (
    <Link key={video_id} href={`/result?id=${video_id}`}>
      <div className='flex w-36 flex-col gap-4 mobile:w-32'>
        <Image
          src={thumbnails}
          alt={video_title}
          width={144}
          height={80}
          className='h-20 w-36 rounded-lg object-cover mobile:h-[72px] mobile:w-32'
        />
        <div className='flex flex-col gap-1'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className='line-clamp-2 text-left text-xs font-semibold'>
                  {video_title}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p className='text-xs font-medium'>{video_title}</p>
              </TooltipContent>
            </Tooltip>
            <p className='line-clamp-1 text-left text-[11px] text-gray-500'>
              {channel_title}
            </p>
          </TooltipProvider>
        </div>
      </div>
    </Link>
  );
};

export default HistoryCard;
