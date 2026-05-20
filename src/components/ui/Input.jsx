import React, { forwardRef } from 'react';

const Input = forwardRef((
  { label, error, helperText, className = '', leftIcon, rightIcon, ...props },
  ref
) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-[var(--color-text)]">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2.5 text-sm rounded-lg
            border transition-all duration-200
            bg-[var(--color-surface)] text-[var(--color-text)]
            placeholder:text-[var(--color-text-muted)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent
            ${error
              ? 'border-[var(--color-danger)] focus:ring-[var(--color-danger)]'
              : 'border-[var(--color-border)]'
            }
            ${leftIcon ? 'pr-10' : ''}
            ${rightIcon ? 'pl-10' : ''}
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="text-xs text-[var(--color-danger)] mt-0.5">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
