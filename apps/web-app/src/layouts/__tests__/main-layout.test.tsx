<<<<<<< HEAD:apps/nextjs-app/src/components/layout/__tests__/MainLayout.test.tsx
import { MainLayout } from '@/components/layout/MainLayout';
=======
import { MainLayout } from '@/layouts/MainLayout';
>>>>>>> a71c3ac8 (refactor(web-app): layouts and partials):apps/web-app/src/layouts/__tests__/main-layout.test.tsx
import { render, screen } from '@/test-utils';

describe('Main layout tests', () => {
  it('should render children', async () => {
    render(
      <MainLayout>
        <div role="article">Hello</div>
      </MainLayout>
    );
    const appContent = screen.getByRole('article');
    expect(appContent).toHaveTextContent('Hello');
  });
});
