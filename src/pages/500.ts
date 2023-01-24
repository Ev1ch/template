import { GetStaticProps } from 'next';

import { HOME_PAGE_URL } from '@/core/constants';

export default function ServerError() {
  return null;
}

export const getStaticProps: GetStaticProps = () => ({
  redirect: {
    destination: HOME_PAGE_URL,
    permanent: false,
  },
});
