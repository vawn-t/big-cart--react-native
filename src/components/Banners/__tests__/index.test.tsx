import Banners from '../index';

// Tests
import { render, screen } from '@utils/index';

// Mocks
import { homeSlides } from '@mocks/index';

// Themes
import { colors } from '@themes/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('Banners component', () => {
  const setup = () => {
    return render(<Banners />);
  };

  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders the correct number of indicators', () => {
    setup();
    const indicators = screen.getAllByTestId('indicator');
    expect(indicators.length).toBe(homeSlides.length);
  });

  it('renders the first indicator as active', () => {
    setup();
    const indicators = screen.getAllByTestId('indicator');
    expect(indicators[0]).toHaveStyle({
      width: 32,
      backgroundColor: colors.primary.main,
    });
  });
});
