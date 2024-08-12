import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LiaAngleRightSolid } from 'react-icons/lia';

const NavigatorHeader = ({
  location,
  children,
  linkText,
}: {
  location?: string;
  children: React.ReactNode;
  linkText?: string;
}) => {
  const showURLButton = linkText && location;
  return (
    <section
      className={`flex items-center ${showURLButton ? 'justify-between' : 'justify-start'} text-primary`}
    >
      {children}
      {showURLButton && (
        <Button variant='link' asChild>
          <Link href={location} passHref>
            {linkText}
            <LiaAngleRightSolid />
          </Link>
        </Button>
      )}
    </section>
  );
};

export default NavigatorHeader;
