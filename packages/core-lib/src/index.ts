export { Asserts } from './utils/asserts';
export { ArrayUtils } from './utils/array-utils';
export { RandomUtils } from './utils/random-utils';
export { loremIpsum } from 'lorem-ipsum';

export * from './utils/typeguards';
export * from './utils/unsplash-image-uri';
export type { UnPromisify } from './utils/type-utils';

export const sayHello = (name: string): string => {
  return `I'm the @mqs/ui-lib component telling ${name} !`;
};
