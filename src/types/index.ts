// src/types/index.ts

export interface SalesData {
  year: number;
  sales: number;
}

export type ChartType = 'bar' | 'line' | 'pie';

export interface FilterState {
  threshold: number;
}