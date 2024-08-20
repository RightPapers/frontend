'use client';

import { useAccuracyStore } from '@/lib/AccuracyStore';
import { Gradient } from '@/lib/types';
import { useEffect, useState } from 'react';

const TitleComponent = ({ children }: { children: React.ReactNode }) => {
  const [gradient, setGradient] = useState<Gradient>();

  const accuracy = useAccuracyStore((state) => state.accuracy);

  useEffect(() => {
    if (accuracy < 30) {
      setGradient(Gradient.red);
    } else if (accuracy <= 70) {
      setGradient(Gradient.orange);
    } else {
      setGradient(Gradient.blue);
    }
  }, [accuracy]);

  return (
    <div
      className='w-52 rounded-xl p-4 font-medium text-white'
      style={{
        backgroundImage: gradient,
      }}
    >
      {children}
    </div>
  );
};

export default TitleComponent;
