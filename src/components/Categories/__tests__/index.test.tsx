import Categories from '..';
import { render } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('Categories component', () => {
  const setup = () => {
    return render(<Categories />);
  };

  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
