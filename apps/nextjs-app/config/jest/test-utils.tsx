/**
 * Automatically add app-providers
 * @see https://testing-library.com/docs/react-testing-library/setup#configuring-jest-with-test-utils
 */
import { render } from '@testing-library/react';
import type { NextRouter } from 'next/router';
import type React from 'react';
import { AppTestProviders } from './app-test-providers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AppTestProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

/**
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockUseRouter({
  basePath = '',
  pathname = '/',
  route = '/',
  asPath = '/',
  query = {},
  push = jest.fn(),
  replace = jest.fn(),
  reload = jest.fn(),
  back = jest.fn(),
  prefetch = jest.fn(),
  beforePopState = jest.fn(),
  events = {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback = false,
}: Partial<NextRouter> = {}) {
  useRouter.mockImplementation(() => ({
    basePath,
    pathname,
    route,
    asPath,
    query,
    push,
    replace,
    reload,
    back,
    prefetch,
    beforePopState,
    events,
    isFallback,
  }));
}
