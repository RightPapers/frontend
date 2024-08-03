import CardComponent from '@/components/CardComponent';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tooltip } from '@radix-ui/react-tooltip';

const ArticleCard = ({
  source,
  upload_time,
  title,
  link,
}: {
  source: string;
  upload_time: string;
  title: string;
  link: string;
}) => {
  return (
    <a href={link} className='flex flex-col space-y-[4px]'>
      <CardComponent>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className='text-left text-sm font-semibold text-gray-900'>
                {source}
              </p>
              <p className='text-left text-xs text-gray-500'>{upload_time}</p>
              <p className='line-clamp-2 text-left text-sm text-gray-900'>
                {title}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-[13px] font-medium'>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardComponent>
    </a>
  );
};

export default ArticleCard;
