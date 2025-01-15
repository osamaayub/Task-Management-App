import { ReactNode } from 'react';

export const DropdownMenu = ({ children }) => {
  return (
    <div className="relative inline-block text-left">
      {children}
    </div>
  );
};

export const DropdownMenuTrigger = ({ children }) => {
  return (
    <button className="flex items-center">{children}</button>
  );
};

export const DropdownMenuContent = ({ children }) => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
      {children}
    </div>
  );
};

export const DropdownMenuItem = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {children}
    </button>
  );
};