import WebAppFooter from '@/partials/WebAppFooter';
import { render, screen } from '@/test-utils';

describe('<WebAppFooter />', () => {
  it('should render', async () => {
    render(<WebAppFooter testId="WebAppFooter" />);
    const webAppFooter = screen.getByTestId('WebAppFooter');
    expect(webAppFooter).toBeInTheDocument();
  });
});
