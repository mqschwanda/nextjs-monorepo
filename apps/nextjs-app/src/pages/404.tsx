import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  NotFoundPage,
  getServerSideLayout,
  systemConfig,
} from '@/features/system';

type Props = {
  /** Add NotFoundRoute props here */
};

function NotFoundRoute(_props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <NotFoundPage />;
}

NotFoundRoute.getServerSideLayout = getServerSideLayout;

export default NotFoundRoute;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = systemConfig;
  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
