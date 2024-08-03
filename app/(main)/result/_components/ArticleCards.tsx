'use client';
import ArticleCard from './ArticleCard';
import TitleComponent from '@/components/TitleComponent';
import { FiPaperclip } from 'react-icons/fi';

const dummArticles = [
  {
    source: '경기일보',
    upload_time: '2024.08.01',
    title: '끊겼던 금빛 행진 재개…한국, 올림픽 통산 300호 메달 [파리 올림픽]',
    link: 'https://n.news.naver.com/article/666/0000048460?cds=news_media_pc&type=editn',
  },
  {
    source: '경기일보',
    upload_time: '2024.07.31',
    title:
      '‘티메프 사태’에 국내 이커머스 전반 신뢰도 하락 우려…온플법 탄력 받나',
    link: 'https://n.news.naver.com/article/138/0002178905?cds=news_media_pc&type=editn',
  },
  {
    source: '동아사이언스',
    upload_time: '2024.08.01',
    title: '콧구멍 깊숙한 곳, 면역세포 키우는 "훈련소" 있다',
    link: 'https://n.news.naver.com/article/584/0000028135?cds=news_media_pc&type=editn',
  },
];

const ArticleCards = () => {
  return (
    <div className='flex flex-col'>
      <div className='z-0 mb-[-7px]'>
        <TitleComponent accuracy={29}>
          <div className='flex'>
            <FiPaperclip className='relative top-[5px] mr-[10px]' />
            관련 기사
          </div>
        </TitleComponent>
      </div>
      <div className='z-10 flex flex-col gap-2'>
        {dummArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleCards;
