import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NotFoundPage } from '@/features/system/pages';
import { systemConfig } from '@/features/system/system.config';
import { getServerSideTranslations } from '@/lib/i18n';

const i18nNamespaces = systemConfig.i18nNamespaces;

NotFoundRoute.getServerSideLayout = getServerSideLayout;

export default NotFoundRoute;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = notFoundConfig;
  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};

export default function Custom404(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <NotFoundPage />;
}
