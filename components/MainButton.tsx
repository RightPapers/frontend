import { Button } from './ui/button';

const variants = {
  main: 'w-full rounded-[10px] shadow-md',
};

type Variant = keyof typeof variants;

const MainButton = ({
  children,
  variant,
  ...props
}: {
  children: React.ReactNode;
  variant: Variant;
}) => {
  return (
    <Button className={`${variants[variant]}`} {...props}>
      {children}
    </Button>
  );
};

export default MainButton;
