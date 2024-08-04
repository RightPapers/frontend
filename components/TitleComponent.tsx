import { useEffect, useState } from 'react';

interface Gradient {
  left: string;
  right: string;
}

const TitleComponent = ({
  children,
  accuracy,
}: {
  children: React.ReactNode;
  accuracy: number;
}) => {
  const [gradient, setGradient] = useState<Gradient>({
    left: '',
    right: '',
  });

  useEffect(() => {
    if (accuracy < 30) {
      setGradient({
        left: '#e73737',
        right: '#b23232',
      });
    } else if (accuracy <= 70) {
      setGradient({
        left: '#FF9401',
        right: '#AD6400',
      });
    } else {
      setGradient({
        left: '#054AA8',
        right: '#002354',
      });
    }
  }, [accuracy]);

  return (
    <div
      className='w-52 rounded-xl p-4 font-medium text-white'
      style={{
        backgroundImage: `linear-gradient(240.22deg, ${gradient.left} 0%, ${gradient.right} 100%)`,
      }}
    >
      {children}
    </div>
  );
};

export default TitleComponent;
