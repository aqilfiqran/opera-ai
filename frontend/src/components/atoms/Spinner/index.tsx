import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return <Loader2 className={cn('size-4 animate-spin text-neutral-200', className)} />;
}
