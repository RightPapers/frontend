import AccuracyDashboard from './_components/AccuracyDashboard';
import FeedbackCard from './_components/FeedbackCard';
import SummaryCard from './_components/SummaryCard';
import ArticleCards from './_components/ArticleCards';

const Result = () => {
  return (
    <>
      <AccuracyDashboard accuracy={30} />
      <SummaryCard />
      <ArticleCards />
      <FeedbackCard />
    </>
  );
};

export default Result;
