import HorizontalCards from '../index';

// Tests
import { render } from '@utils/index';

// Mocks
import { products } from '@mocks/index';

const baseProps: React.ComponentProps<typeof HorizontalCards> = {
  products,
};

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const setup = (overrideProps = {}) => {
  const props = { ...baseProps, overrideProps };

  return render(<HorizontalCards {...props} />);
};

describe('HorizontalCards component', () => {
  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
