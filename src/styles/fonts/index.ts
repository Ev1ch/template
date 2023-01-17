import { Roboto } from '@next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic-ext', 'latin-ext'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
