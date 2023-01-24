import type { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

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

  return <MuiThemeProvider theme={themes[themeMode]}>{children}</MuiThemeProvider>;
}
