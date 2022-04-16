import { ErrorPage } from '@/features/system/pages';
import { render, screen } from '@/test-utils';

describe('<ErrorPage />', () => {
  it('should render', async () => {
    render(<ErrorPage testId="ErrorPage" />);
    const errorPage = screen.getByTestId('ErrorPage');
    expect(errorPage).toBeInTheDocument();
  });
});
