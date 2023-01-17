import type { ThemeOptions } from '@mui/material';
import { merge } from 'lodash';

import defaultThemeOptions from '../themes/defaultThemeOptions';

const mergeWithDefaultOptions = (themeOptions: ThemeOptions) =>
  merge(defaultThemeOptions, themeOptions);

export default mergeWithDefaultOptions;
