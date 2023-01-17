import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps as NextAppProps } from 'next/app';

import type { Page } from '@/core/types';
import { DEFAULT_TITLE } from '@/core/constants';
import { Layout } from '@/components/layouts';
import { Box } from '@/components/common';
import { GlobalStyles } from '@/styles/global';
import wrapper from '@/store';
import { roboto } from '@/styles/fonts';
import { useTranslation } from '#/localization/hooks';

interface AppProps extends NextAppProps {
  Component: Page;
}

export default function App({ Component, ...props }: AppProps) {
  const { store, props: updatedProps } = wrapper.useWrappedStore(props);
  const { t } = useTranslation();

  const getLayout =
    Component.getLayout ?? ((page: ReactNode) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <Head>
        <title>{updatedProps.pageProps.title ?? t(DEFAULT_TITLE)}</title>
      </Head>
      <Box className={roboto.className}>
        <GlobalStyles />
        {getLayout(<Component {...updatedProps.pageProps} />)}
      </Box>
    </Provider>
  );
}
