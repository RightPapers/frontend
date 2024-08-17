import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
      className={cn(
        'flex items-center justify-start gap-1 text-primary',
        (location || handleClick) && 'justify-between'
      )}
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
