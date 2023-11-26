import LoginForm from '..';
import { fireEvent, render, screen, waitFor } from '@utils/index';
import { colors } from '@themes/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const setup = (overrideProps = {}) => {
  const props = { ...overrideProps };
  return render(<LoginForm {...props} />);
};

describe('LoginForm', () => {
  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should update error style if submit invalid data', async () => {
    const { getByText } = setup();

    fireEvent.changeText(screen.getByPlaceholderText('Email Address'), 'email');
    fireEvent.changeText(
      screen.getByPlaceholderText('● ● ● ● ● ●'),
      'password',
    );

    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      const errorInputs = screen.getAllByTestId('Input');
      expect(errorInputs[0]).toHaveStyle({
        borderColor: colors.red,
      });
      expect(errorInputs[1]).toHaveStyle({
        borderColor: colors.red,
      });
    });
  });
});
