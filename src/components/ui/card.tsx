import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}