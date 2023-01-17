import type { ReactNode } from 'react';

import { ThemeProvider as UiThemeProvider } from '@/components/common';
import { useSelector } from '@/store/hooks';
import { selectThemeMode } from '@/modules/ui/slice';
import { ThemeMode } from '../types';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

interface ThemeProviderProps {
  children: ReactNode;
}

const themes = {
  [ThemeMode.LIGHT]: lightTheme,
  [ThemeMode.DARK]: darkTheme,
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeMode = useSelector(selectThemeMode);

  return (
    <UiThemeProvider theme={themes[themeMode]}>{children}</UiThemeProvider>
  );
}
