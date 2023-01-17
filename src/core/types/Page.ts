import type { NextPage } from 'next';
import type { ReactNode } from 'react';

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default Page;
