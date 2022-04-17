/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  extends: [
    '@mqs/eslint-config-bases/typescript',
    '@mqs/eslint-config-bases/sonar',
    '@mqs/eslint-config-bases/regexp',
    '@mqs/eslint-config-bases/jest',
    '@mqs/eslint-config-bases/react',
    '@mqs/eslint-config-bases/graphql-schema',
    // Apply prettier and disable incompatible rules
    '@mqs/eslint-config-bases/prettier',
  ],
  overrides: [
    {
      files: ['src/queries.ts'],
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
