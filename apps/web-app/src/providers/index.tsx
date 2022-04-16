import type { EmotionCache } from '@emotion/react';
import { ApolloProvider } from '@mqs/graphql-client';
import { UIProvider } from '@mqs/ui-lib';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

import apolloClient from '@/core/apollo/client';
import { emotionCache as clientSideEmotionCache } from '@/core/emotion';
import { muiTheme } from '@/core/theme';
import WebAppUiContextProvider from '@/hooks/useWebAppUiContext/provider';

type AppProvidersProps = {
  emotionCache?: EmotionCache;
  children: ReactNode;
};

const Providers: FC<AppProvidersProps> = (props) => {
  const { children, emotionCache = clientSideEmotionCache } = props;
  return (
    <UIProvider cache={emotionCache} theme={muiTheme}>
      <WebAppUiContextProvider>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </WebAppUiContextProvider>
    </UIProvider>
  );
};

export default memo(Providers);
