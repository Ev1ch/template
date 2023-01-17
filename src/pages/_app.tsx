import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps as NextAppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';

import type { Page } from '@/core/types';
import { DEFAULT_TITLE } from '@/core/constants';
import { Layout } from '@/components/layouts';
import { GlobalStyles } from '@/styles/global';
import wrapper from '@/store';
import { createCache } from '@/styles/cache';
import { ThemeProvider } from '@/styles/themes';
import { useTranslation } from '#/localization/hooks';

interface AppProps extends NextAppProps {
  Component: Page;
  emotionCache?: EmotionCache;
}

const clientSideStylesCache = createCache();

export default function App({ Component, ...props }: AppProps) {
  const { store, props: updatedProps } = wrapper.useWrappedStore(props);
  const { t } = useTranslation();
  const stylesCache = updatedProps.emotionCache ?? clientSideStylesCache;
  const title = updatedProps.pageProps.title ?? t(DEFAULT_TITLE);

  const getLayout = Component.getLayout ?? ((page: ReactNode) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <CacheProvider value={stylesCache}>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider>
          <GlobalStyles />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {getLayout(<Component {...updatedProps.pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
