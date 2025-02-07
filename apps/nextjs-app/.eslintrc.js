/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

const {
  getDefaultIgnorePatterns,
} = require('@mqs/eslint-config-bases/helpers');

module.exports = {
  root: true,
  ignorePatterns: [...getDefaultIgnorePatterns(), '.next', '.out'],
  extends: [
    '@mqs/eslint-config-bases/typescript',
    '@mqs/eslint-config-bases/sonar',
    '@mqs/eslint-config-bases/regexp',
    '@mqs/eslint-config-bases/jest',
    '@mqs/eslint-config-bases/react',
    '@mqs/eslint-config-bases/rtl',
    '@mqs/eslint-config-bases/graphql-schema',
    // Add specific rules for nextjs
    'plugin:@next/next/core-web-vitals',
    // Apply prettier and disable incompatible rules
    '@mqs/eslint-config-bases/prettier',
  ],
  rules: {
    // https://github.com/vercel/next.js/discussions/16832
    '@next/next/no-img-element': 'off',
    // For the sake of example
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      files: ['src/pages/\\_*.{ts,tsx}'],
      rules: {
        'react/display-name': 'off',
      },
    },
    {
      files: ['src/backend/**/*graphql*schema*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            // Fine-tune naming convention for graphql resolvers and allow PascalCase
            selector: ['objectLiteralProperty'],
            format: ['camelCase', 'PascalCase'],
          },
        ],
      },
    },
  ],
};
