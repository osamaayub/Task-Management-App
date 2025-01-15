// components/ui/dialog.tsx

import React from 'react';

interface DialogProps {
  open: boolean;
  children: React.ReactNode;
}

export const Dialog = ({ open, children }: DialogProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div className='bg-white rounded-lg shadow-lg p-6'>{children}</div>
    </div>
  );
}

export const DialogContent = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const DialogHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex justify-between items-center mb-4'>{children}</div>
  );
};

import { ReactNode } from 'react';

export const DialogTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className='text-lg font-semibold'>{children}</h2>;
};
