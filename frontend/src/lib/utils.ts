import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initialName(name: string) {
  const names = name.split(' ');
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
}

export function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function formatCurrency({
  value,
  currency = 'SGD',
  country = 'en-SG',
  options = {},
}: {
  value: number;
  currency?: string;
  country?: string;
  options?: Intl.NumberFormatOptions;
}) {
  return new Intl.NumberFormat(country, {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
    currency,
  }).format(value);
}
