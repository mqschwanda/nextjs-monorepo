import type { Poem } from '@mqs/db-main-prisma';
import { Alert, Button, CircularProgress, Grid } from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { usePoemsQuery } from '../../hooks';
import { DemoApiSectionCard } from './partials/DemoApiSectionCard';

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

    if (loading || !data?.poems) {
      return <CircularProgress />;
    }

    return (
      <Grid container spacing={1}>
        {data.poems.map((poem: Poem) => (
          <Grid item xs={12} md={6} lg={4} key={poem.id}>
            <DemoApiSectionCard poem={poem} />
          </Grid>
        ))}
      </Grid>
    );
  }, [error, data, refetch, loading]);

  return <section>{content}</section>;
};
