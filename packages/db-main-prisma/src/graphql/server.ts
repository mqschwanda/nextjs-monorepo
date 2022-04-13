import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { context } from './context';
import { typeDefs, resolvers } from './schema';

const plugins = [
  process.env.NODE_ENV === 'production'
    ? ApolloServerPluginLandingPageProductionDefault({
        // graphRef: 'graphql-sdl@nextjs-monorepo-example',
        footer: false,
      })
    : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
];

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins,
});
