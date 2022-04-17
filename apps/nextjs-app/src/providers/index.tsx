import type { EmotionCache } from '@emotion/react';
import { ApolloProvider } from '@mqs/graphql-client';
import { UIProvider } from '@mqs/ui-lib';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

import WebAppUiContextProvider from '@/hooks/useWebAppUiContext/provider';
import apolloClient from '@/lib/apollo/client';
import { emotionCache as clientSideEmotionCache } from '@/lib/emotion';
import { muiTheme } from '@/lib/theme';

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
