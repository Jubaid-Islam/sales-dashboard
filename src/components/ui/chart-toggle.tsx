import Button from '@/components/ui/button';
import { ChartType } from '@/types';

interface ChartToggleProps {
  type: ChartType;
  label: string;
  isActive: boolean;
  onClick: (type: ChartType) => void;
}

export default function ChartToggle({
  type,
  label,
  isActive,
  onClick,
}: ChartToggleProps) {
  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      onClick={() => onClick(type)}
      className={`text-sm px-4 py-1.5 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md cursor-pointer'
          : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 cursor-pointer'
      }`}
    >
      {label}
    </Button>
  );
}