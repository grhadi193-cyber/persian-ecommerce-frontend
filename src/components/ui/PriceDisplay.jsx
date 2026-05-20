import React from 'react';
import { formatPrice, discountPercent } from '../../utils/currency';

const PriceDisplay = ({ price, discountPrice, size = 'md', className = '' }) => {
  const hasDiscount = discountPrice && Number(discountPrice) < Number(price);
  const percent = hasDiscount ? discountPercent(price, discountPrice) : 0;

  const mainSize = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-lg';
  const origSize = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {hasDiscount && (
        <div className="flex items-center gap-2">
          <span className={`${origSize} text-[var(--color-text-muted)] line-through`}>
            {formatPrice(price)}
          </span>
          <span className="px-1.5 py-0.5 bg-red-100 text-[var(--color-danger)] text-xs font-bold rounded-md">
            {percent}٪ تخفیف
          </span>
        </div>
      )}
      <span className={`${mainSize} font-bold text-[var(--color-text)]`}>
        {formatPrice(hasDiscount ? discountPrice : price)}
      </span>
    </div>
  );
};

export default PriceDisplay;
