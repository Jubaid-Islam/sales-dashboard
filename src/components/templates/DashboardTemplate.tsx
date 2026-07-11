'use client';

import { useState } from 'react';
import SalesChart from '@/components/organisms/SalesChart';
import FilterInput from '@/components/molecules/FilterInput';
import ChartTypeSelector from '@/components/molecules/ChartTypeSelector';
import { ChartType } from '@/types';

export default function DashboardTemplate() {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);

  const handleFilter = (newThreshold: number) => {
    setThreshold(newThreshold);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Sales Dashboard
            </h1>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Interactive sales data for 2022, 2023, and 2024
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 cursor-default">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Live Data
          </div>
        </div>

        {/* Controls Panel */}
        <div className="mb-6 bg-white p-5 rounded-2xl shadow-md border border-gray-200/80 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all hover:shadow-lg">
          <div className="w-full md:w-1/2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
              Threshold Filter
            </label>
            <FilterInput onApplyFilter={handleFilter} />
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
              Chart Type
            </label>
            <ChartTypeSelector
              currentType={chartType}
              onTypeChange={setChartType}
            />
          </div>
        </div>

        {/* Chart Section */}
        <div className="transition-all duration-300 ease-in-out">
          <SalesChart chartType={chartType} threshold={threshold} />
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-gray-400 border-t border-gray-200 pt-4 cursor-default">
          Data is refreshed on page load. Filter applies to all chart views.
        </div>
      </div>
    </div>
  );
}