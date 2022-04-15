/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

module.exports = {
  ignorePatterns: ['.next', '**/.out'],
  extends: [
    // Add specific rules for react
    // './react.js',
    // Add specific rules for nextjs
    'plugin:@next/next/core-web-vitals',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    // next/image might not be yet a good move as of NextJs v11.
    // https://github.com/vercel/next.js/discussions/16832
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    {
      files: ['src/pages/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/display-name': 'off',
      },
    },
    {
      files: ['src/backend/api/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['config/jest/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
  ],
};
