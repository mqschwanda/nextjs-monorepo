import { Box, Container, Divider, Stack, Typography } from '@mqs/ui-lib';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@/components';
import type { PageType } from '@/types.d/next-pages';
import type { WithTestId } from '@/types.d/react';

export type WebAppFooterProps = WithTestId<{
  subpages?: Array<PageType>;
}>;

function WebAppFooter({ subpages, testId }: WebAppFooterProps) {
  const { t } = useTranslation(['common', 'system']);

  return (
    <Box
      component="footer"
      sx={{ marginTop: 'auto', paddingY: 6, backgroundColor: 'primary.main' }}
      data-testid={testId}
    >
      <Container>
        <Stack spacing={1}>
          <Box maxWidth="420px">
            <Typography variant="caption" color="primary.contrastText">
              {t('common:loreum')}
            </Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={1}>
            <Typography
              color="primary.contrastText"
              component="span"
              lineHeight="24px"
              variant="h5"
            >
              {t('common:brand.name')}
            </Typography>
            {subpages?.map(({ label, href }) => (
              <Link
                color="primary.contrastText"
                href={href}
                key={href}
                lineHeight="24px"
                variant="caption"
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default memo(WebAppFooter);
