import Image from 'next/image';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tooltip } from '@radix-ui/react-tooltip';

export default function HistoryCard({
  video_title,
  channel_title,
  thumbnails,
}: {
  video_title: string;
  channel_title: string;
  thumbnails: string;
}) {
  return (
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
              <p className='text-[9px] font-bold'>{video_title}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <p className='line-clamp-1 text-left text-[11px] text-gray-500'>
                {channel_title}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-[9px] font-bold'>{channel_title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
