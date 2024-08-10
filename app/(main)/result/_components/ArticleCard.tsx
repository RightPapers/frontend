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
    <a href={link}>
      <CardComponent className='py-5'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='flex flex-col gap-2 text-left'>
              <div>
                <p className='text-sm font-semibold'>{source}</p>
                <p className='text-xs text-gray-500'>{upload_time}</p>
              </div>
              <p className='line-clamp-2 text-sm'>{title}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-xs font-medium'>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardComponent>
    </a>
  );
};

export default ArticleCard;
