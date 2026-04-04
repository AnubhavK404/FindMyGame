import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes with clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Randomly picks an item from an array
 */
export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Shuffles an array and returns a subset
 */
export function shuffle<T>(arr: T[], count?: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return count ? shuffled.slice(0, count) : shuffled;
}
