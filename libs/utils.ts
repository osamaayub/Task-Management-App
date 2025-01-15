import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | { [key: string]: boolean }
  | ClassValue[];

export function cn(...inputs:ClassValue[]) {
  return twMerge(clsx(...inputs));
}
