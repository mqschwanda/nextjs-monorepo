import type { GetPoems } from '@mqs/db-main-prisma';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  CircularProgress,
  Grid,
  Skeleton,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { usePoemsQuery } from '../hooks';

type NoChildrenProps = {
  children?: never;
};

export const DemoApiSection: FC<NoChildrenProps> = () => {
  const { loading, data, error, refetch } = usePoemsQuery();

  const content = useMemo(() => {
    if (error) {
      return (
        <Alert
          action={
            <Button onClick={refetch} color="inherit">
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

    if (loading || !data?.poems) {
      return <CircularProgress />;
    }

    return (
      <Grid container spacing={1}>
        {data.poems.map(
          ({ keywords, id, author, title, content }: GetPoems[0]) => {
            const keywordURI = (keywords ?? [])
              .map((keyword) => encodeURIComponent(keyword))
              .join(',');
            const image = `https://source.unsplash.com/random/640x480?${keywordURI}`;

            return (
              <Grid item xs={12} md={6} lg={4} key={id}>
                <Card>
                  <CardHeader
                    title={title ?? <Skeleton />}
                    subheader={author ? `By ${author}` : <Skeleton />}
                  />
                  {keywords ? (
                    <CardMedia component="img" src={image} alt={title} />
                  ) : (
                    <Skeleton height="300px" width="100%" />
                  )}
                  <CardContent>
                    <Typography variant="caption">
                      {content ?? (
                        <>
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </>
                      )}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {keywords?.map((keyword) => (
                      <Chip
                        color="primary"
                        key={keyword}
                        label={`#${keyword}`}
                      />
                    ))}
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        )}
      </Grid>
    );
  }, [error, data, refetch, loading]);

  return <section>{content}</section>;
};
