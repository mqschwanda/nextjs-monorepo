import { Tab, Tabs, useTheme } from '@mqs/ui-lib';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import { Link } from '@/components';
import type { PageType } from '@/types.d/next-pages';
import type { WithTestId } from '@/types.d/react';

export type WebAppBarTopTabsProps = WithTestId<{
  pages: Array<PageType>;
}>;

function WebAppBarTopTabs({ pages, testId }: WebAppBarTopTabsProps) {
  const router = useRouter();
  const theme = useTheme();
  const value = useMemo(() => {
    if (
      pages.reduce(
        (current, page) => current || page.href === router.asPath,
        false
      )
    ) {
      return router.asPath;
    }

    return false;
  }, [router, pages]);

  return (
    <Tabs
      indicatorColor="secondary"
      selectionFollowsFocus={false}
      textColor="inherit"
      value={value}
      data-testid={testId}
    >
      {pages.map(({ label, href, icon }) => (
        <Tab
          LinkComponent={Link}
          color="inherit"
          href={href}
          icon={icon}
          iconPosition="start"
          key={href}
          label={label}
          sx={{ ...theme.mixins.toolbar }}
          value={href}
        />
      ))}
    </Tabs>
  );
}

export default memo(WebAppBarTopTabs);
