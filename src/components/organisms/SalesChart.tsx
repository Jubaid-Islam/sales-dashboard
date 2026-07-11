'use client';

import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SalesData, ChartType } from '@/types';
import Card from '@/components/ui/card';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

interface SalesChartProps {
  chartType: ChartType;
  threshold: number;
}

export default function SalesChart({ chartType, threshold }: SalesChartProps) {
  const [data, setData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sales');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch sales data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => item.sales >= threshold);

  if (loading) {
    return (
      <Card className="flex items-center justify-center h-64 md:h-80">
        <div className="flex flex-col items-center gap-3 cursor-default">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading sales data...</p>
        </div>
      </Card>
    );
  }

  if (filteredData.length === 0) {
    return (
      <Card className="flex items-center justify-center h-64 md:h-80">
        <div className="text-center cursor-default">
          <p className="text-gray-400 text-4xl mb-2">📊</p>
          <p className="text-gray-600 text-base font-medium">No data matches this threshold</p>
          <p className="text-gray-400 text-sm mt-1">Try lowering the filter value</p>
        </div>
      </Card>
    );
  }

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <XAxis dataKey="year" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip
                formatter={(value) => [`$${value}`, 'Sales']}
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  padding: '8px 12px',
                }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Bar
                dataKey="sales"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                animationDuration={800}
                className="cursor-pointer"
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <XAxis dataKey="year" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip
                formatter={(value) => [`$${value}`, 'Sales']}
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  padding: '8px 12px',
                }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: 'white' }}
                activeDot={{ r: 8, className: 'cursor-pointer' }}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={filteredData}
                dataKey="sales"
                nameKey="year"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={40}
                paddingAngle={2}
                label={({ name, value }) => `${name} ($${value})`}
                labelLine={{ stroke: '#9ca3af', strokeWidth: 1 }}
                animationDuration={800}
                className="cursor-pointer"
              >
                {filteredData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`$${value}`, 'Sales']}
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  padding: '8px 12px',
                }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 cursor-default">
          Sales Analysis
          <span className="ml-2 text-sm font-normal text-gray-400">
            ({filteredData.length} year{filteredData.length > 1 ? 's' : ''})
          </span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full cursor-default">
          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          {threshold > 0 ? `Filtered ≥ $${threshold}` : 'All data'}
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        {renderChart()}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 text-center cursor-default">
        Hover on chart elements to see detailed values
      </div>
    </Card>
  );
}