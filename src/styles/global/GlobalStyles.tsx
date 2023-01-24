import { CssBaseline, GlobalStyles as MuiGlobalStyles } from '@mui/material';

import styles from './styles';

export default function GlobalStyles() {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles styles={styles} />
    </>
  );
}
