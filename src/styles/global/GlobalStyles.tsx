import { CssBaseline, GlobalStyles as UiGlobalStyles } from '@/components/common';
import styles from './styles';

export default function GlobalStyles() {
  return (
    <>
      <CssBaseline />
      <UiGlobalStyles styles={styles} />
    </>
  );
}
