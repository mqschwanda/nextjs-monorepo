import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
<<<<<<< HEAD:apps/nextjs-app/src/pages/index.tsx
import { demoConfig } from '@/features/demo/demo.config';
import { DemoPage } from '@/features/demo/pages';
=======
import { demoConfig, DemoPage } from '@/features/demo';
>>>>>>> 1593ce10 (refactor(web-app): sections):apps/web-app/src/pages/poems.tsx

type Props = {
  /** Add HomeRoute props here */
};

export default function DemoRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <DemoPage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = demoConfig;
  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
