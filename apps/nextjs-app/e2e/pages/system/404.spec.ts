import { test, expect } from '@playwright/test';
import commonJsonEn from '@/public/locales/en/common.json';

const pageSlug = 'this-page-does-not-exist';

test.describe('404 not found page', () => {
  test('should have the title in english by default', async ({ page }) => {
    await page.goto(`/${pageSlug}`);
    const title = await page.title();
    expect(title).toBe(commonJsonEn.pages.notFound.title);
  });
});
