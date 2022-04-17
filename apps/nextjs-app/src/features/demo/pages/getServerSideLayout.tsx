import { Container } from '@mqs/ui-lib';
import type { ReactElement } from 'react';
import { MainLayout } from '@/layouts/MainLayout';

export const getServerSideLayout = (page: ReactElement) => {
  return (
    <>
      <MainLayout>
        <Container>{page}</Container>
      </MainLayout>
    </>
  );
};
