import { useTranslation } from '#/localization/hooks';

import wrapper from '@/store';
import { getT } from '#/localization/utils';

export default function Home() {
  const { t } = useTranslation();

  return <>{t('common:company.name')}</>;
}

export const getStaticProps = wrapper.getStaticProps(() => async ({ locale }) => {
  const t = await getT(locale, ['pages/home']);
  const title = t('pages/home:meta.title');

  return {
    props: {
      title,
    },
  };
});
