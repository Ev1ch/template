import type { ReactNode } from 'react';
import type { AppProps as NextAppProps } from 'next/app';

import type { Page } from '@/core/types';
import { Layout } from '@/components/layouts';
import Head from 'next/head';

interface AppProps extends NextAppProps {
  Component: Page;
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    Component.getLayout ?? ((page: ReactNode) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
