/**
 * Universal Currency & Price Formatter for Scentora
 * Prices are in LE (Egyptian Pounds / جنيه مصري)
 */
export const formatPrice = (amount, lang = 'en') => {
  if (amount == null || isNaN(amount)) return '';
  const num = Math.round(Number(amount));
  const formatted = num.toLocaleString();
  return lang === 'ar' ? `${formatted} ج.م` : `${formatted} LE`;
};

export const CURRENCY_CODE = 'LE';
export const CURRENCY_LABEL_AR = 'ج.م';

