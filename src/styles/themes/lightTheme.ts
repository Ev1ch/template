import { createTheme } from '@mui/material/styles';

import { mergeWithDefaultOptions } from '../utils';

const lightTheme = createTheme(
  mergeWithDefaultOptions({
    palette: {
      mode: 'light',
    },
  }),
);

export default lightTheme;
