import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';

export const plugins = [
  process.env.NODE_ENV === 'production'
    ? ApolloServerPluginLandingPageProductionDefault({
        // graphRef: 'graphql-sdl@nextjs-monorepo-example',
        footer: false,
      })
    : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
];
