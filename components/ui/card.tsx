import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode; // Content to be displayed inside the card
  className?: string; // Additional custom class names
  onClick?: () => void; // Optional click handler
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
