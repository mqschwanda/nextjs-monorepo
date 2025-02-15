import { Box, DashboardIcon, HomeIcon } from '@mqs/ui-lib';
import type { FC, ReactNode } from 'react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useWebAppUiContext from '@/hooks/useWebAppUiContext';
import WebAppBarTop from '@/partials/WebAppBarTop/loadable';
import WebAppFooter from '@/partials/WebAppFooter/loadable';
import WebAppNavigationDrawer from '@/partials/WebAppNavigationDrawer/loadable';

const webAppNavigationDrawerWidth = '240px';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = (props) => {
  const { children } = props;
  const { t } = useTranslation(['common']);
  const { webAppDrawerOpen, setWebAppDrawerOpen, isWebAppDrawerPermanent } =
    useWebAppUiContext();
  const handleClickNavigationIcon = useCallback(
    () => setWebAppDrawerOpen((current) => !current),
    [setWebAppDrawerOpen]
  );
  const handleClose = useCallback(
    () => setWebAppDrawerOpen(false),
    [setWebAppDrawerOpen]
  );
  const pages = useMemo(
    () => [
      {
        href: '/home',
        label: t('common:pages.home.name'),
        icon: <HomeIcon />,
      },
      {
        href: '/demo',
        label: t('common:pages.demo.name'),
        icon: <DashboardIcon />,
      },
    ],
    [t]
  );

  const subpages = useMemo(
    () => [
      {
        href: '/legal/privacy_policy',
        label: t('common:pages.privacyPolicy.name'),
      },
      {
        href: '/legal/terms_of_service',
        label: t('common:pages.termsOfService.name'),
      },
      {
        href: '/feedback',
        label: t('common:pages.feedback.name'),
      },
    ],
    [t]
  );

  return (
    <>
      <WebAppNavigationDrawer
        onClose={handleClose}
        open={isWebAppDrawerPermanent || webAppDrawerOpen}
        pages={pages}
        subpages={subpages}
        variant={isWebAppDrawerPermanent ? 'permanent' : undefined}
        width={webAppNavigationDrawerWidth}
      />
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        marginLeft={
          isWebAppDrawerPermanent ? webAppNavigationDrawerWidth : undefined
        }
      >
        <WebAppBarTop
          pages={pages}
          onClickNavigationIcon={handleClickNavigationIcon}
        />
        <Box component="main" paddingY={3}>
          {children}
        </Box>
        <WebAppFooter subpages={subpages} />
      </Box>
    </>
  );
};
