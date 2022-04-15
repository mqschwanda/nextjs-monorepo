# @mqs/lint-staged

## About lint-staged

[Lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky) are used to automatically
run linters on commit.

### Structure

See [the doc to use lint-staged in a monorepo](https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo)
and the [linter docs](https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md).

```
.
├── apps
│   └── web-app
│       ├── .eslintrc.js
│       └── lint-staged.config.js  (overwrite global lint-staged.config.js, custom eslint)
├── packages
│   ├── lint-staged
│   │   ├── .eslintrc.js
│   │   └── lint-staged.config.js  (overwrite global lint-staged.config.js, custom eslint)
│   │       └── src
│   │           └── index.js  (few common utils)
│   └── ui-lib
│       ├── .eslintrc.js
│       └── lint-staged.config.js  (overwrite global lint-staged.config.js, custom eslint)
│
└── lint-staged.config.js  (base config to overwrite per apps/packages)
```
