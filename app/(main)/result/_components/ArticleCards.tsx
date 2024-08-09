import ArticleCard from './ArticleCard';
import TitleComponent from '@/components/TitleComponent';
import { RelatedArticle } from '@/lib/types';
import { FiPaperclip } from 'react-icons/fi';

const ArticleCards = ({
  accuracy,
  articles,
}: {
  accuracy: number;
  articles: RelatedArticle[];
}) => {
  return (
    <div className='flex flex-col'>
      <div className='mb-[-7px]'>
        <TitleComponent accuracy={accuracy}>
          <div className='flex items-center gap-2'>
            <FiPaperclip size={22} />
            관련 기사
          </div>
        </TitleComponent>
      </div>
      <div className='z-10 flex flex-col gap-2'>
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleCards;
