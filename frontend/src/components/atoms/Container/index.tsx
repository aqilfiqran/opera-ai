import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
  'data-testid'?: string;
}

export default function Container({ children, id, ref, className, ...props }: Readonly<ContainerProps>) {
  return (
    <div
      {...props}
      ref={ref}
      className={cn('mx-auto w-full px-3 sm:max-w-[540px] md:max-w-[720px] md:px-0', className)}
      id={id}
    >
      {children}
    </div>
  );
}
