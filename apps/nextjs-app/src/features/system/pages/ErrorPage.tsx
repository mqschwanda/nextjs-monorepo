import { Card, CardContent, Typography } from '@mqs/ui-lib';
import Head from 'next/head';
import type { FC } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import type { WithTestId } from '@/types.d/react';

type Props = WithTestId<{
  statusCode?: number;
  title?: string;
  error?: Error;
  message?: string;
  errorId?: string;
  children?: never;
}>;

export const ErrorPage: FC<Props> = (props) => {
  const { error, errorId, message, statusCode, testId } = props;
  const title = props.title || `Error ${statusCode}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <MainLayout>
        <Card data-testid={testId}>
          <CardContent>
            {title ? <Typography variant="h4">{title}</Typography> : null}
            {message ? <Typography>{message}</Typography> : null}
            {errorId ? <Typography>Error id: {errorId}</Typography> : null}
            {error?.message ? (
              <Typography>Error: {error?.message}</Typography>
            ) : null}
          </CardContent>
        </Card>
      </MainLayout>
    </>
  );
};
