// @ts-check

/**
 * This is the base lint-staged rules config and just includes prettier by default.
 * A good practice is to override this base configuration in each package and/or application
 * where we are able to add customization depending on the nature of the project (eslint...).
 *
 * {@link https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo}
 * {@link https://github.com/mqschwanda/nextjs-monorepo/blob/main/packages/lint-staged/README.md}
 */

const { concatFilesForPrettier } = require('@mqs/lint-staged');

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{json,md,mdx,css,html,yml,yaml,scss,ts,js,tsx,jsx,mjs}': (
    filenames
  ) => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`];
  },
};

module.exports = rules;
