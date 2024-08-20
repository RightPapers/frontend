import CardComponent from '@/components/CardComponent';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Article } from '@/lib/types';
import { dateFormatter } from '@/lib/utils';
import { Tooltip } from '@radix-ui/react-tooltip';
import Link from 'next/link';

const ArticleCard = ({ description, pubDate, title, link }: Article) => {
  return (
    <Link href={link}>
      <CardComponent className='py-5'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='flex flex-col gap-2 text-left'>
              <p
                className='line-clamp-2 text-sm font-semibold'
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className='text-xs text-gray-500'>{dateFormatter(pubDate)}</p>
              <p
                className='line-clamp-3 text-sm'
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p
                className='text-xs font-medium'
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardComponent>
    </Link>
  );
};

export default ArticleCard;
