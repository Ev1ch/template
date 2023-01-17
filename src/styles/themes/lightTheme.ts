import { createTheme } from '@mui/material/styles';
import { merge } from 'lodash';

import defaultThemeOptions from './defaultThemeOptions';

const lightTheme = createTheme(
  merge(defaultThemeOptions, {
    palette: {
      mode: 'light' as const,
    },
  }),
);

export default lightTheme;
