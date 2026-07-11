'use client';

import { useState } from 'react';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

interface FilterInputProps {
  onApplyFilter: (threshold: number) => void;
}

export default function FilterInput({ onApplyFilter }: FilterInputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleApply = () => {
    const threshold = parseFloat(inputValue);
    if (!isNaN(threshold)) {
      onApplyFilter(threshold);
    } else {
      onApplyFilter(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <Input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Min sales (e.g. 50000)"
        className="flex-1 h-10 text-sm rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
      />
      <Button
        onClick={handleApply}
        className="h-10 px-5 text-sm font-medium bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
      >
        Apply
      </Button>
    </div>
  );
}