import React from 'react';
import Text from '@/components/atoms/Text';
import { cn } from '@/lib/utils';

interface SectionProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ label, children, className }: SectionProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <Text variant="xs" className="font-normal text-neutral-500">
        {label}
      </Text>
      {children}
    </div>
  );
}
