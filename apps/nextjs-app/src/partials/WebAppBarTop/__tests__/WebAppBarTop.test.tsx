import WebAppBarTop from '@/partials/WebAppBarTop';
import { render, screen } from '@/test-utils';

describe('<WebAppBarTop />', () => {
  it('should render', async () => {
    render(<WebAppBarTop testId="WebAppBarTop" />);
    const webAppBarTop = screen.getByTestId('WebAppBarTop');
    expect(webAppBarTop).toBeInTheDocument();
  });
});
