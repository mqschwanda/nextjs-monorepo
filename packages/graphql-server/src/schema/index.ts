import { PostModel } from '@mqs/db-main-prisma/src/api';
import { gql } from 'apollo-server-micro';
import type { GraphqlContext } from '../context';

export const typeDefs = gql`
  type Post {
    id: Int!
    title: String!
    content: String
    link: String
    image: String
    slug: String!
    keywords: [String!]
    author: User
    authorId: Int
    publishedAt: String
    createdAt: String!
    updatedAt: String!
  }

  type User {
    id: Int!
    firstName: String
    lastName: String
    username: String!
    email: String!
    image: String
    emailVerifiedAt: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    post(id: Int!): Post
    posts(limit: Int, offset: Int): [Post!]!
  }
`;

export const resolvers = {
  Query: {
    post: async (
      _parent: unknown,
      _args: {
        id: number;
      },
      context: GraphqlContext
    ) => {
      const post = new PostModel(context.prisma);
      return await post.getPost(_args.id);
    },
    posts: async (
      _parent: unknown,
      _args: {
        limit?: number;
        offset?: number;
      },
      context: GraphqlContext
    ) => {
      const post = new PostModel(context.prisma);
      return await post.getPosts({
        limit: _args.limit,
        offset: _args.offset,
      });
    },
  },
};
