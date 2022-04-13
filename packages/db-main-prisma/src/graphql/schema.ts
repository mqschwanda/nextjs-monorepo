import { PoemSSR } from '@mqs/db-main-prisma/src/api';
import { gql } from 'apollo-server-micro';
import type { GraphqlContext } from './context';

export const typeDefs = gql`
  type Poem {
    id: Int!
    title: String
    content: String
    author: String
    keywords: [String]
  }
  type Query {
    poems: [Poem!]!
  }
`;

export const resolvers = {
  Query: {
    poems: (
      _parent: unknown,
      _args: {
        limit?: number;
        offset?: number;
      },
      context: GraphqlContext
    ) => {
      const poemSSR = new PoemSSR(context.prisma);
      return poemSSR.getPoems({
        limit: _args.limit,
        offset: _args.offset,
      });
    },
  },
};
