import SignUpForm from '..';
import { fireEvent, render, screen, waitFor } from '@utils/testProvider';
import { colors } from '@themes/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@hooks/useAuth/useAuthSignUp', () => {
  return jest.fn().mockReturnValue({
    isSuccess: true,
    data: { token: 'token' },
    variables: { email: 'test@gmail.com' },
  });
});

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

const setup = () => {
  return render(<SignUpForm />);
};

describe('SignUpForm', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders the form correctly', () => {
    const { getByPlaceholderText, toJSON } = setup();

    expect(toJSON()).toMatchSnapshot();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(getByPlaceholderText('Phone number')).toBeTruthy();
    expect(getByPlaceholderText('● ● ● ● ● ●')).toBeTruthy();
  });

  it('should update error style if submit invalid data', async () => {
    const { getByText } = setup();

    fireEvent.changeText(screen.getByPlaceholderText('Email address'), 'email');
    fireEvent.changeText(
      screen.getByPlaceholderText('Phone number'),
      '0123456789',
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('● ● ● ● ● ●'),
      'password',
    );

    fireEvent.press(getByText('Signup'));

    await waitFor(() => {
      const errorInputs = screen.getAllByTestId('Input');
      expect(errorInputs[0]).toHaveStyle({
        borderColor: colors.red,
      });
      expect(errorInputs[1]).toHaveStyle({
        borderColor: colors.red,
      });
      expect(errorInputs[2]).toHaveStyle({
        borderColor: colors.red,
      });
    });
  });
});
