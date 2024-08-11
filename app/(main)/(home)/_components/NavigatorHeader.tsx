import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';
import { LiaAngleRightSolid } from 'react-icons/lia';

const NavigatorHeader = ({
  location,
  children,
  linkText,
}: {
  location: string;
  children: React.ReactNode;
  linkText: string;
}) => {
  return (
    <section className='flex items-center justify-between text-primary'>
      {children}
      <Button variant='link' asChild>
        <Link href={location} passHref>
          {linkText}
          <LiaAngleRightSolid />
        </Link>
      </Button>
    </section>
  );
};

export default NavigatorHeader;
