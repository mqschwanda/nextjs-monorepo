import { NotFoundPage } from '@/features/system/pages';
import { mockUseRouter, render, screen } from '@/test-utils';

describe('<NotFoundPage />', () => {
  beforeEach(() => {
    mockUseRouter();
  });

  it('should render', async () => {
    render(<NotFoundPage testId="NotFoundPage" />);
    const notFoundPage = screen.getByTestId('NotFoundPage');
    expect(notFoundPage).toBeInTheDocument();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
