import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'text-dk-sm text-dark flex rounded-[6px] bg-white font-medium transition-colors',
        'placeholder:text-neutral-300',
        'disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400 disabled:placeholder:text-neutral-600',
        'focus-visible:outline-none',
        className
      )}
      {...props}
    />
  );
}

export { Input };
