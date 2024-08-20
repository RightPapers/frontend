import { useEffect, useState } from 'react';

interface DashboardColor {
  accuracy: string;
  resultText: string;
  background: string;
}

export default function useAccuracyTheme(accuracy: number) {
  const initialDegree = -135;
  const [rotateDegree, setRotateDegree] = useState<number>(initialDegree);
  const [resultText, setResultText] = useState<string>('');
  const [dashboardColor, setDashboardColor] = useState<DashboardColor>({
    accuracy: '',
    resultText: '',
    background: '',
  });

  useEffect(() => {
    if (accuracy < 30) {
      setResultText('대체로 사실이 아닙니다');
      setDashboardColor({
        accuracy: 'text-destructive',
        resultText: 'text-white',
        background: 'bg-destructive',
      });
    } else if (accuracy <= 70) {
      setResultText('사실 여부 판별이 어렵습니다');
      setDashboardColor({
        accuracy: 'text-black',
        resultText: 'text-black',
        background: 'bg-secondary',
      });
    } else {
      setResultText('대체로 사실입니다');
      setDashboardColor({
        accuracy: 'text-primary',
        resultText: 'text-white',
        background: 'bg-primary',
      });
    }
    // 0 ~ 100 -> -135 ~ 135 (accuracy -> rotateDegree)
    const degree = (accuracy / 100) * initialDegree * -2 + initialDegree;
    setRotateDegree(degree);
  }, [accuracy]);

  return {
    rotateDegree,
    resultText,
    dashboardColor,
  };
}
