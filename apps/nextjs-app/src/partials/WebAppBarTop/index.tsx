import {
  AppBarTop,
  Box,
  IconButton,
  MenuIcon,
  MoreVertIcon,
  Typography,
} from '@mqs/ui-lib';
import { memo } from 'react';
import type { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import type { PageType } from '@/types.d/next-pages';
import type { WithTestId } from '@/types.d/react';
import { WebAppBarTopTabs } from './partials';

export type WebAppBarTopProps = WithTestId<{
  pages?: Array<PageType>;
  onClickNavigationIcon?: MouseEventHandler<HTMLButtonElement>;
}>;

function WebAppBarTop({
  pages,
  onClickNavigationIcon,
  testId,
}: WebAppBarTopProps) {
  const { t } = useTranslation(['common', 'system']);

  return (
    <AppBarTop position="sticky" data-testid={testId}>
      <IconButton
        color="inherit"
        onClick={onClickNavigationIcon}
        size="large"
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" component="span">
        {t('common:brand.name')}
      </Typography>
      <Box display="flex" flexGrow={1} justifyContent="end">
        {pages && <WebAppBarTopTabs pages={pages} />}
      </Box>
      <IconButton size="large" color="inherit" sx={{ display: 'none' }}>
        <MoreVertIcon />
      </IconButton>
    </AppBarTop>
  );
}

export default memo(WebAppBarTop);
