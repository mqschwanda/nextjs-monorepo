import type { ReactElement } from 'react';
import { MainLayout } from '@/layouts/MainLayout';

export const getServerSideLayout = (page: ReactElement) => {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
