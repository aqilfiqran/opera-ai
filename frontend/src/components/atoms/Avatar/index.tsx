import { Avatar as AvatarPrimitive, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AvatarProps {
  src?: string;
  fallback?: string;

  className?: string;
}

export default function Avatar({ src, fallback, className }: AvatarProps) {
  return (
    <AvatarPrimitive className={className} data-testid="avatar">
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive>
  );
}
