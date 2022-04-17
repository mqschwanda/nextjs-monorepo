import WebAppNavigationDrawer from '@/partials/WebAppNavigationDrawer';
import { render, screen } from '@/test-utils';

describe('<WebAppNavigationDrawer />', () => {
  it('should render', async () => {
    render(<WebAppNavigationDrawer testId="WebAppNavigationDrawer" open />);
    const webAppNavigationDrawer = screen.getByTestId('WebAppNavigationDrawer');
    expect(webAppNavigationDrawer).toBeInTheDocument();
  });
});
