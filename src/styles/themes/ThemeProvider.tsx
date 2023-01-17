import type { ReactNode } from 'react';

import { ThemeProvider as UiThemeProvider } from '@/components/common';
import lightTheme from './lightTheme';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <UiThemeProvider theme={lightTheme}>{children}</UiThemeProvider>;
}
