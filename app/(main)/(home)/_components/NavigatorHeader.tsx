import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LiaAngleRightSolid } from 'react-icons/lia';

const NavigatorHeader = ({
  location,
  children,
  linkText,
  handleClick,
}: {
  location?: string;
  children: React.ReactNode;
  linkText?: string;
  handleClick?: () => void;
}) => {
  return (
    <section
      className={`flex items-center ${location || handleClick ? 'justify-between' : 'justify-start'} text-primary`}
    >
      {children}
      {location && (
        <Button variant='link' onClick={handleClick} asChild>
          <Link href={location} passHref className='flex items-center'>
            {linkText}
            <LiaAngleRightSolid />
          </Link>
        </Button>
      )}
      {handleClick && (
        <Button variant='link' onClick={handleClick}>
          {linkText}
          <LiaAngleRightSolid />
        </Button>
      )}
    </section>
  );
};

export default NavigatorHeader;
