import { SalesData } from '@/types';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);
};

export const filterSalesByThreshold = (
  data: SalesData[],
  threshold: number
): SalesData[] => {
  if (threshold <= 0) return data;
  return data.filter((item) => item.sales >= threshold);
};