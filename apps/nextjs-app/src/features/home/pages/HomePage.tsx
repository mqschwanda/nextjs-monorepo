import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { usePageTranslation } from '@/features/home/hooks';
import {
  CtaSection,
  FeaturesSection,
  HeroSection,
} from '@/features/home/sections';

type Props = {
  children?: never;
};

export const HomePage: FC<Props> = () => {
  const { t } = usePageTranslation();

  return (
    <>
      <NextSeo
        title={t('common:pages.home.title')}
        description={t('common:pages.home.description')}
      />

      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </>
  );
};
