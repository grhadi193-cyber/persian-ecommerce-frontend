import { format } from 'date-fns-jalali';
import { toPersian } from './persianNumbers';

export const toJalali = (isoString) => {
  if (!isoString) return '';
  try {
    const date = new Date(isoString);
    const formatted = format(date, 'yyyy/MM/dd');
    return toPersian(formatted);
  } catch {
    return '';
  }
};

export const toJalaliDateTime = (isoString) => {
  if (!isoString) return '';
  try {
    const date = new Date(isoString);
    const formatted = format(date, 'yyyy/MM/dd HH:mm');
    return toPersian(formatted);
  } catch {
    return '';
  }
};
