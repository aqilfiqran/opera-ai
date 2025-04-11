import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const textVariants = cva('text-black', {
  variants: {
    variant: {
      h1: 'font-heading !text-mb-h1 tracking-3 lg:text-dk-h1 font-medium',
      h2: 'font-heading !text-mb-h2 tracking-3 lg:text-dk-h2 font-medium',
      h3: 'font-heading !text-mb-h3 tracking-3 lg:text-dk-h3 font-medium',
      h4: 'font-heading !text-mb-h4 tracking-2 lg:text-dk-h4 font-medium lg:font-semibold',
      h5: 'font-heading !text-mb-h5 tracking-2 lg:text-dk-h5 font-semibold',
      h6: 'font-heading !text-mb-h6 tracking-1 lg:text-dk-h6 font-semibold',
      xl: 'text-mb-xl tracking-2 lg:text-dk-xl font-sans',
      lg: 'text-mb-lg tracking-1 lg:text-dk-lg font-sans',
      md: 'text-mb-md tracking-2 lg:text-dk-md font-sans',
      sm: 'text-mb-sm tracking-2 lg:text-dk-sm font-sans',
      xs: '!text-mb-xs tracking-1 lg:text-dk-xs font-sans',
      xxs: '!text-mb-xxs tracking-1 lg:text-dk-xxs font-sans',
      xxxs: '!text-mb-xxxs tracking-1 lg:text-dk-xxxs font-sans',
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});

export const componentVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  xl: 'p',
  lg: 'p',
  md: 'p',
  sm: 'p',
  xs: 'p',
  xxs: 'p',
  xxxs: 'p',
};

interface TextProps extends React.ButtonHTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, asChild = false, as, ...props }, ref) => {
    const Comp = asChild ? Slot : as || componentVariants[variant || 'md'] || 'p';

    return <Comp className={cn(textVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Text.displayName = 'Text';

export default Text;
