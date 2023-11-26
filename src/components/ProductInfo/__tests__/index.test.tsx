import ProductInfo from '..';
import { render } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps: React.ComponentProps<typeof ProductInfo> = {
  id: 1,
  price: 10,
  name: 'Sample Product',
  productUnitId: 1,
  description: 'A sample product description',
};

const setup = (overrideProps = {}) => {
  const props = { ...ownProps, ...overrideProps };

  return render(<ProductInfo {...props} />);
};

describe('ProductInfo component', () => {
  it('renders correctly', () => {
    const { toJSON } = setup({
      id: 1,
      price: 10,
      name: 'Sample Product',
      amount: '2kg',
      description: 'A sample product description',
      numberInCart: 3,
    });
    expect(toJSON()).toMatchSnapshot();
  });
});
