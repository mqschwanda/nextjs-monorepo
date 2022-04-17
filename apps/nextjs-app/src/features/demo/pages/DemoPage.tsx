import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { usePageTranslation } from '@/features/demo/hooks';
import { DemoApiSection } from '@/features/demo/sections';

type Props = {
  children?: never;
};

export const DemoPage: FC<Props> = () => {
  const { t } = usePageTranslation();

  return (
    <>
      <NextSeo
        title={t('common:pages.demo.title')}
        description={t('common:pages.demo.description')}
      />

      <DemoApiSection />
    </>
  );
};
