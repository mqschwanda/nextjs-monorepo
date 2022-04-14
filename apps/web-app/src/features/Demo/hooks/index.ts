import type { QueryResult } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import type { GetPoems } from '@mqs/db-main-prisma';
import { useTranslation } from 'react-i18next';
import { demoConfig } from '@/features/Demo/config';

export const usePageTranslation = () => {
  return useTranslation(demoConfig.i18nNamespaces);
};

export const usePoemsQuery = (): QueryResult<{ poems: GetPoems }> =>
  useQuery(gql`
    query PoemsQuery {
      poems {
        id
        title
        content
        author
        keywords
      }
    }
  `);
