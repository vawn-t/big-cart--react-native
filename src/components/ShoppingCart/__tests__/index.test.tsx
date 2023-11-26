import { ShoppingCart } from '@components/index';
import { render } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('ShoppingCart component', () => {
  const setup = (props = {}) => {
    return render(<ShoppingCart cartItemIds={[]} {...props} />);
  };

  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
