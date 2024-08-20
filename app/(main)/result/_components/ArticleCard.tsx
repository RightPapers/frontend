import CardComponent from '@/components/CardComponent';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { RelatedArticle } from '@/lib/types';
import { Tooltip } from '@radix-ui/react-tooltip';
import Link from 'next/link';

const ArticleCard = ({ description, pubDate, title, link }: RelatedArticle) => {
  return (
    <Link href={link}>
      <CardComponent className='py-5'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='flex flex-col gap-2 text-left'>
              <div>
                <p className='text-sm font-semibold'>{description}</p>
                <p className='text-xs text-gray-500'>{pubDate}</p>
              </div>
              <p className='line-clamp-2 text-sm'>{title}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-xs font-medium'>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardComponent>
    </Link>
  );
};

export default ArticleCard;
