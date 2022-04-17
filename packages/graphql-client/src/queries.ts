import type { QueryHookOptions, QueryResult } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import type { GetPosts } from '@mqs/db-main-prisma';

export const PostsQuery = gql`
  query PostsQuery($limit: Int = 100, $offset: Int = 0) {
    posts(limit: $limit, offset: $offset) {
      id
      title
      content
      image
      slug
      author {
        id
        firstName
        lastName
      }
    }
  }
`;
export type PostQueryData = { posts: GetPosts };
export type PostQueryVariables = { limit: number; offset: number };
export const usePostsQuery = (
  options: QueryHookOptions<PostQueryData, PostQueryVariables>
): QueryResult<PostQueryData, PostQueryVariables> =>
  useQuery(PostsQuery, options);
