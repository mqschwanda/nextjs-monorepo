import { ApolloProvider } from '@apollo/client';
import type { EmotionCache } from '@emotion/react';
import { UIProvider } from '@mqs/ui-lib';
import type { FC, ReactNode } from 'react';

import apolloClient from '@/core/apollo/client';
import { emotionCache as clientSideEmotionCache } from '@/core/emotion';
import WebAppUiContextProvider from '@/hooks/useWebAppUiContext/provider';
import { muiTheme } from '@/themes/mui/mui.theme';

type AppProvidersProps = {
  emotionCache?: EmotionCache;
  children: ReactNode;
};

export const AppProviders: FC<AppProvidersProps> = (props) => {
  const { children, emotionCache = clientSideEmotionCache } = props;
  return (
    <UIProvider cache={emotionCache} theme={muiTheme}>
      <WebAppUiContextProvider>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </WebAppUiContextProvider>
    </UIProvider>
  );
};
