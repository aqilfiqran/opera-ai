import Input, { InputProps } from '@/components/atoms/Input';
import Spinner from '@/components/atoms/Spinner';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface InputQuestionProps extends Omit<InputProps, 'rightSection' | 'leftSection' | 'onSubmit'> {
  onValueSubmit?: () => void;
  loading?: boolean;
}

export default function InputQuestion({
  wrapperClassName,
  className,
  onValueSubmit,
  loading,
  ...props
}: InputQuestionProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the key is "/" and no input/textarea is focused (to avoid conflicts when typing)
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    // Add event listener to window
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleValueSubmit = () => {
    if (loading) return;
    onValueSubmit?.();
  };

  return (
    <Input
      type="text"
      placeholder="ask AI. press '/' to focus"
      {...props}
      ref={inputRef}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          // trigger the onChange event
          handleValueSubmit();
        }
      }}
      wrapperClassName={cn(
        'rounded-full border-neutral-500 bg-neutral-200',
        // focus add max width to vw-95
        'transition-all duration-200 ease-in-out',
        'max-w-xs has-[input:focus-visible]:max-w-full md:has-[input:focus-visible]:max-w-lg',
        wrapperClassName
      )}
      className={cn('rounded-full bg-neutral-200 pl-5 placeholder:text-neutral-400', className)}
      rightSection={
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-500 transition-colors hover:bg-neutral-600"
          role="button"
          tabIndex={0}
          onClick={handleValueSubmit}
        >
          {loading ?
            <Spinner  />
          : <ArrowUp className="text-neutral-200" size={16} />}
        </div>
      }
    />
  );
}
