/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

const {
  getDefaultIgnorePatterns,
} = require('@mqs/eslint-config-bases/helpers');

module.exports = {
  root: true,
  ignorePatterns: [...getDefaultIgnorePatterns(), 'src/generated'],
  extends: [
    '@mqs/eslint-config-bases/typescript',
    '@mqs/eslint-config-bases/sonar',
    '@mqs/eslint-config-bases/regexp',
    '@mqs/eslint-config-bases/jest',
    // Apply prettier and disable incompatible rules
    '@mqs/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};
