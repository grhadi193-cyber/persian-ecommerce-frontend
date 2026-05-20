import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({
  icon: Icon = PackageOpen,
  title = '\u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f',
  description = '',
  action = null,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center fade-in">
      <div className="w-20 h-20 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-4">
        <Icon size={36} className="text-[var(--color-primary)]" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-[var(--color-text-muted)] max-w-sm mb-6">{description}</p>
      )}
      {action}
    </div>
  );
};

export default EmptyState;
