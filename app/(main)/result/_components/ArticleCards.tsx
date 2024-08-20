import ArticleCard from './ArticleCard';
import TitleComponent from '@/components/TitleComponent';
import { RelatedArticles } from '@/lib/types';
import { FiPaperclip } from 'react-icons/fi';

const ArticleCards = ({ articles }: { articles: RelatedArticles }) => {
  return (
    <div className='flex flex-col'>
      <div className='mb-[-7px]'>
        <TitleComponent>
          <div className='flex items-center gap-2'>
            <FiPaperclip size={22} />
            관련 기사
          </div>
        </TitleComponent>
      </div>
      <div className='z-10 flex flex-col gap-2'>
        <ArticleCard {...articles.first_news} />
        <ArticleCard {...articles.second_news} />
        <ArticleCard {...articles.third_news} />
      </div>
    </div>
  );
};

export default ArticleCards;
