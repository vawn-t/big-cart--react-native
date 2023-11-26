import ForgotPasswordForm from '..';
import { render } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@services/auth', () => ({
  resetPassword: jest.fn(),
}));

jest.mock('@hooks/useAuth/useAuthResetPassword', () => {
  return jest.fn().mockReturnValue({
    isSuccess: true,
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
  return render(<ForgotPasswordForm />);
};

describe('ForgotPasswordForm component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
