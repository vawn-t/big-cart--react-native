import SearchResult from '..';
import { render } from '@utils/index';
import { products } from '@mocks/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('SearchResult component', () => {
  const ownProps: React.ComponentProps<typeof SearchResult> = {
    results: products,
  };

  const setup = (overrideProps = {}) => {
    const props = { ...ownProps, ...overrideProps };

    return render(<SearchResult {...props} />);
  };

  it('renders correctly with results', () => {
    const sampleResults = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        amount: '2kg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 15,
        amount: '1kg',
      },
    ];

    const { toJSON } = setup({ results: sampleResults });
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when no results are available', () => {
    const { toJSON } = setup({ results: [] });
    expect(toJSON()).toMatchSnapshot();
  });
});
