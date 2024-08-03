import React from 'react';
import styled from 'styled-components';

interface GradientCardProps {
  accuracy: number;
}

const GradientCard = styled.div<GradientCardProps>`
  background: ${({ accuracy }) => {
    if (accuracy <= 30) {
      return 'linear-gradient(240.22deg, #e73737 0%, #b23232 100%)';
    } else if (accuracy <= 70) {
      return 'linear-gradient(240.22deg, #FF9401 0%, #AD6400 100%)';
    } else {
      return 'linear-gradient(240.22deg, #054AA8 0%, #002354 100%)';
    }
  }};
  border-radius: 10px;
  padding: 16px;
  width: 195px;
`;

const TitleComponent = ({
  children,
  accuracy,
}: {
  children: React.ReactNode;
  accuracy: number;
}) => {
  return (
    <GradientCard className='font-medium text-white' accuracy={accuracy}>
      {children}
    </GradientCard>
  );
};

export default TitleComponent;
