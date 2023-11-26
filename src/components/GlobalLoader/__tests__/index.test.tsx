import GlobalLoader from '..';
import { render } from '@utils/testProvider';

describe('GlobalLoader', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<GlobalLoader />);
    const loader = getByTestId('global-loader');
    expect(loader).toBeTruthy();
  });
});
