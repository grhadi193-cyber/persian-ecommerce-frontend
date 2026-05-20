import { toPersian } from './persianNumbers';

export const formatPrice = (n) => {
  if (n === null || n === undefined) return '';
  const formatted = Number(n).toLocaleString('fa-IR');
  return `${toPersian(formatted)} \u062a\u0648\u0645\u0627\u0646`;
};

export const discountPercent = (original, discounted) => {
  if (!original || !discounted || discounted >= original) return 0;
  return Math.round(((original - discounted) / original) * 100);
};
