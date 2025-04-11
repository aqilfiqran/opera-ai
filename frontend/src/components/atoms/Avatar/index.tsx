import { Avatar as AvatarPrimitive, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AvatarProps {
  src?: string;
  fallback?: string;

  className?: string;
}

export default function Avatar({ src, fallback, className }: AvatarProps) {
  return (
    <AvatarPrimitive className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive>
  );
}
