'use client';

import initMocks from '@/mocks';
import { useEffect, useState } from 'react';

const MswProvider = ({ children }: { children: React.ReactNode }) => {
  const [mock, setMock] = useState(false);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' && !mock) {
      console.log('initMocks');
      initMocks().then(() => setMock(true));
    }
  }, [mock]);
  if (!mock) return;
  return children;
};

export default MswProvider;
