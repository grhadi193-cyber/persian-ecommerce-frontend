import React from 'react';

const sizes = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };

const Spinner = ({ size = 'md', color = 'primary', className = '' }) => {
  const colorClass =
    color === 'current'
      ? 'border-current border-t-transparent'
      : color === 'white'
      ? 'border-white border-t-transparent'
      : 'border-[var(--color-primary)] border-t-transparent';

  return (
    <span
      className={`
        inline-block rounded-full border-2 animate-spin
        ${sizes[size] || sizes.md}
        ${colorClass}
        ${className}
      `}
      role="status"
      aria-label="\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc"
    />
  );
};

export default Spinner;
