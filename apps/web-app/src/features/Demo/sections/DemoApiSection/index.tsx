import type { PostQueryData } from '@mqs/graphql-client';
import { usePostsQuery } from '@mqs/graphql-client';
import { Alert, Button, CircularProgress, Grid } from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { DemoApiSectionCard } from './partials/DemoApiSectionCard';

type Post = PostQueryData['posts'][0];

type NoChildrenProps = {
  children?: never;
};

export const DemoApiSection: FC<NoChildrenProps> = () => {
  const { loading, data, error, refetch } = usePostsQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  const content = useMemo(() => {
    if (error) {
      return (
        <Alert
          action={
            <Button onClick={() => refetch()} color="inherit">
              Retry
            </Button>
          }
          severity="error"
          variant="outlined"
        >
          {JSON.stringify(error)}
        </Alert>
      );
    }

    if (loading || !data?.posts) {
      return <CircularProgress />;
    }

    return (
      <Grid container spacing={1}>
        {data.posts.map((post: Post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <DemoApiSectionCard post={post} />
          </Grid>
        ))}
      </Grid>
    );
  }, [error, data, refetch, loading]);

  return <section>{content}</section>;
};
