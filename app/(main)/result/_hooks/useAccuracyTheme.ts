import { Gradient } from '@/lib/types';
import { useEffect, useState } from 'react';

interface DashboardColor {
  accuracy: string;
  gradient: Gradient;
}

export default function useAccuracyTheme(accuracy: number) {
  const initialDegree = -135;
  const [rotateDegree, setRotateDegree] = useState<number>(initialDegree);
  const [resultText, setResultText] = useState<string>('');
  const [dashboardColor, setDashboardColor] = useState<DashboardColor>({
    accuracy: '',
    gradient: Gradient.red,
  });

  useEffect(() => {
    if (accuracy < 30) {
      setResultText('대체로 사실이 아닙니다');
      setDashboardColor({
        accuracy: 'text-destructive',
        gradient: Gradient.red,
      });
    } else if (accuracy <= 70) {
      setResultText('사실 여부 판별이 어렵습니다');
      setDashboardColor({
        accuracy: 'text-black',
        gradient: Gradient.orange,
      });
    } else {
      setResultText('대체로 사실입니다');
      setDashboardColor({
        accuracy: 'text-primary',
        gradient: Gradient.blue,
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
