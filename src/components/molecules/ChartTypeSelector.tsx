'use client';

import ChartToggle from '@/components/ui/chart-toggle';
import { ChartType } from '@/types';

interface ChartTypeSelectorProps {
  currentType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export default function ChartTypeSelector({
  currentType,
  onTypeChange,
}: ChartTypeSelectorProps) {
  const types: { label: string; value: ChartType }[] = [
    { label: 'Bar', value: 'bar' },
    { label: 'Line', value: 'line' },
    { label: 'Pie', value: 'pie' },
  ];

  return (
    <div className="flex flex-wrap gap-1.5">
      {types.map(({ label, value }) => (
        <ChartToggle
          key={value}
          type={value}
          label={label}
          isActive={currentType === value}
          onClick={onTypeChange}
        />
      ))}
    </div>
  );
}