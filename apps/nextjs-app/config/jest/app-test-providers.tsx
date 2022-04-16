import type { FC, ReactNode } from 'react';
import Providers from '../../src/providers';
import { I18nextTestStubProvider } from './i18next-stub.config';

export const AppTestProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Providers>
      <I18nextTestStubProvider>{children}</I18nextTestStubProvider>
    </Providers>
  );
};
