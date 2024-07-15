import Dashboard from '@/public/assets/dashboard.svg';

interface AccuracyDashboardProps {
  accuracy: number;
}

export default function AccuracyDashboard({
  accuracy,
}: AccuracyDashboardProps) {
  return <Dashboard />;
}
