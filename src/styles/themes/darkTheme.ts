import { createTheme } from '@mui/material/styles';
import { merge } from 'lodash';

import defaultThemeOptions from './defaultThemeOptions';

const darkTheme = createTheme(
  merge(defaultThemeOptions, {
    palette: {
      mode: 'dark' as const,
    },
  }),
);

export default darkTheme;
