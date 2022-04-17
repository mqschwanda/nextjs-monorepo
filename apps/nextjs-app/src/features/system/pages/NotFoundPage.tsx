import {
  ArrowBackIcon,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mqs/ui-lib';
import { captureMessage } from '@sentry/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useMemo, useEffect, useCallback } from 'react';
import { usePageTranslation } from '@/features/system/hooks';
import type { WithTestId } from '@/types.d/react';

type Props = WithTestId<{
  children?: never;
}>;

export const NotFoundPage: FC<Props> = ({ testId }) => {
  const { t } = usePageTranslation();
  const router = useRouter();
  const pathname = useMemo(() => router.asPath || '', [router.asPath]);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  const section = useMemo(
    () => (
      <Box component="section" sx={{ paddingY: 6 }} data-testid={testId}>
        <Card>
          <CardHeader
            title={t('system:notFound.title')}
            subheader={t('system:notFound.subtitle')}
          />
          <CardContent>
            <Typography>{t('system:notFound.body', { pathname })}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              size="large"
              onClick={handleGoBack}
              startIcon={<ArrowBackIcon />}
            >
              {t('common:actions.back')}
            </Button>
          </CardActions>
        </Card>
      </Box>
    ),
    [handleGoBack, pathname, t, testId]
  );

  useEffect(() => {
    captureMessage(`404: ${pathname}`);
  }, [pathname]);

  return (
    <>
      <NextSeo
        title={t('common:pages.notFound.title')}
        description={t('common:pages.notFound.description')}
      />

      {section}
    </>
  );
};
