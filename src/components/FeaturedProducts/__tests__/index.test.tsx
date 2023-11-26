import FeaturedProducts from '../index';
import { render, screen } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const setup = () => {
  return render(<FeaturedProducts />);
};

describe('FeaturedProducts component', () => {
  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the correct title', () => {
    const mockedNavigate = jest.fn();

    jest.mock('@react-navigation/native', () => {
      const actualNav = jest.requireActual('@react-navigation/native');
      return {
        ...actualNav,
        useNavigation: () => ({
          navigate: mockedNavigate,
        }),
      };
    });

    setup();

    expect(screen.getByText('Featured Products')).toBeTruthy();
  });
});
