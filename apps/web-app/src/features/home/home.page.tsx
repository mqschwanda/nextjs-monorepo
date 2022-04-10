import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
<<<<<<< HEAD:apps/nextjs-app/src/features/home/pages/HomePage.tsx
import { Banner } from '@/components/Banner';
import { MainLayout } from '@/components/layout/MainLayout';
import { CtaBlock, FeaturesBlock, HeroBlock } from '../blocks';
import { homeConfig } from '../home.config';
=======
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { homeConfig } from './home.config';
import { CtaSection, FeaturesSection, HeroSection } from './sections';
>>>>>>> 1593ce10 (refactor(web-app): sections):apps/web-app/src/features/home/home.page.tsx

export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description="See https://github.com/mqschwanda/nextjs-monorepo"
      />
      <MainLayout>
        <Banner />
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </MainLayout>
    </>
  );
};
