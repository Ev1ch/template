import { useTranslation } from '#/localization/hooks';

export default function Home() {
  const { t } = useTranslation();

  return <>{t('common:company.name')}</>;
}
