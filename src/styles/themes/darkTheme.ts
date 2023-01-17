import { createTheme } from '@mui/material/styles';

import { mergeWithDefaultOptions } from '../utils';

const darkTheme = createTheme(
  mergeWithDefaultOptions({
    palette: {
      mode: 'dark',
    },
  }),
);

export default darkTheme;
