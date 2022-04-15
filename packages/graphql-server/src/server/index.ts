import { ApolloServer } from 'apollo-server-micro';
import { context } from '../context';
import { plugins } from '../plugins';
import { typeDefs, resolvers } from '../schema';

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins,
});
