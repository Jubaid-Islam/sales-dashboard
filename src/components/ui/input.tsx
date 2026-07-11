import { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  className?: string;
}

export default function Input({
  value,
  onChange,
  onKeyDown,
  placeholder = '',
  type = 'text',
  className = '',
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 bg-white text-gray-800 placeholder:text-gray-400 ${className}`}
    />
  );
}