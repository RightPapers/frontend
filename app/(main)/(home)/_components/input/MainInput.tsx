import { Input } from '@/components/ui/input';
import { ControllerRenderProps } from 'react-hook-form';
import { IoSearch } from 'react-icons/io5';

const MainInput = ({
  field,
}: {
  field: ControllerRenderProps<{ url: string }, 'url'>;
}) => {
  return (
    <div className='relative'>
      <Input
        className='rounded-[34px] border border-primary pl-10 focus-visible:ring-primary'
        {...field}
      />
      <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2' />
    </div>
  );
};

export default MainInput;
