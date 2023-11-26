import { renderHook, act } from '@testing-library/react-hooks';
import useAuthenticator from '../useAuthenticator';
import { createWrapper } from '@utils/index';
import { SignUpFormErrors } from '@interfaces/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('@services/auth', () => ({
  login: jest.fn(),
}));

describe('useAuthenticator Hook', () => {
  afterEach(() => {});
  it('should return initial errors as an empty object', () => {
    const { result } = renderHook(() => useAuthenticator(), {
      wrapper: createWrapper(),
    });
    expect(result.current.errors).toEqual({});
  });

  it('should clear email error when clearEmailError is called', () => {
    const { result } = renderHook(() => useAuthenticator(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.login({
        email: 'invalid email',
        password: 'validPassword123!',
      });
    });

    expect(result.current.errors.email).toBeDefined();

    act(() => {
      result.current.clearEmailError();
    });

    expect(result.current.errors.email).not.toBeDefined();
  });

  it('should clear password error when clearPasswordError is called', () => {
    const { result } = renderHook(() => useAuthenticator(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.login({
        email: 'invalid@email.com',
        password: 'invalid!',
      });
    });

    expect(result.current.errors.password).toBeDefined();

    act(() => {
      result.current.clearPasswordError();
    });

    expect(result.current.errors.password).not.toBeDefined();
  });

  it('should clear phone number error when clearPhoneNumberError is called', () => {
    const { result } = renderHook(() => useAuthenticator(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.signUp({
        email: 'invalid@email.com',
        password: 'Valid!123',
        phone: '01234',
      });
    });

    expect(
      (result.current.errors as SignUpFormErrors).phoneNumber,
    ).toBeDefined();

    act(() => {
      result.current.clearPhoneNumberError();
    });

    expect(
      (result.current.errors as SignUpFormErrors).phoneNumber,
    ).not.toBeDefined();
  });
});
