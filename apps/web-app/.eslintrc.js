/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  extends: [
    'plugin:@mqs/eslint-plugin/base',
    'plugin:@mqs/eslint-plugin/react',
    'plugin:@mqs/eslint-plugin/next',
  ],
};
