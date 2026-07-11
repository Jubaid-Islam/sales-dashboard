import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  onClick,
  variant = 'default',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyle =
    'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyle =
    variant === 'outline'
      ? 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98]'
      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:scale-[0.98]';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}