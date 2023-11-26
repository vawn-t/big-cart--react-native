import VerticalCards from '../index';
import { render } from '@utils/index';
import { productIds } from '@mocks/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const setup = (props = {}) => {
  return render(<VerticalCards cartItemIds={productIds} {...props} />);
};

describe('HorizontalCards component', () => {
  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
