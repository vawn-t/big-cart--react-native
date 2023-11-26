import Header from '..';
import { render, screen } from '@utils/index';
import { colors } from '@themes/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps: React.ComponentProps<typeof Header> = {
  title: 'Example Title',
  isDarkText: false,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...ownProps,
    ...overrideProps,
  };
  return render(<Header {...props} />);
};

describe('Header', () => {
  it('renders the title and back icon', () => {
    setup();

    const titleElement = screen.getByText('Example Title');
    const backIcon = screen.getByTestId('back-icon');

    expect(titleElement).toBeTruthy();
    expect(backIcon).toBeTruthy();
  });

  it('applies dark text color when isDarkText is true', () => {
    setup({ isDarkText: true });

    const titleElement = screen.getByText('Example Title');

    expect(titleElement).toHaveStyle({ color: colors.text.secondary });
  });
});
