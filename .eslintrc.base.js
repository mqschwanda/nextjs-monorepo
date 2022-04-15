/**
 * Default eslint base configuration that can be extended by apps/packages
 * in the monorepo
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  extends: ['plugin:@mqs/eslint-plugin/base'],
};
