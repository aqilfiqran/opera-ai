import { Input as InputPrimitive } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightSection?: React.ReactNode;
  leftSection?: React.ReactNode;

  wrapperClassName?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      rightSection,
      leftSection,
      type = 'text',
      placeholder,
      value,
      onChange,
      wrapperClassName,
      error,
      className,
      onKeyDown,
      ...inputProps
    },
    ref
  ) => {
    const passFocus: React.MouseEventHandler<HTMLDivElement> = e => e.currentTarget.querySelector('input')?.focus();

    return (
      <div
        onClick={passFocus}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
        className={cn(
          [
            'border-input text-mb-sm flex w-full cursor-text rounded-[6px] border bg-white text-neutral-500 transition-colors',
            'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-neutral-200 has-[input:disabled]:text-neutral-700',
            'has-[input:focus-visible]:ring-primary has-[input:focus-visible]:ring-1',
          ],
          { 'border-red-500': error },
          wrapperClassName
        )}
      >
        {leftSection && <div className="py-1.5 pl-2">{leftSection}</div>}
        <InputPrimitive
          {...inputProps}
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn('w-full px-2 py-1.5', className)}
        />
        {rightSection && <div className="py-1.5 pr-2">{rightSection}</div>}
      </div>
    );
  }
);

export default Input;
Input.displayName = 'Input';
