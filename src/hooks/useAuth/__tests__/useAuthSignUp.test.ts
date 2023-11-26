import { act, renderHook } from '@testing-library/react-hooks';
import useAuthSignUp from '../useAuthSignUp';
import { SignUpFormData } from '@interfaces/index';
import { createWrapper } from '@utils/testProvider';

// Mocking the login service function
jest.mock('@services/auth', () => ({
  signUp: jest.fn(),
}));

describe('useAuthSignUp', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    const formData: SignUpFormData = {
      email: 'email',
      password: 'password',
      phone: '0123456789',
    };

    const onSuccessMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthSignUp(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.mutateAsync(formData, { onSuccess: onSuccessMock });
    });

    await waitFor(() => {
      onSuccessMock(formData);
      expect(onSuccessMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
    });
  });

  it('should call onError when mutateAsync is failure', async () => {
    const formData: SignUpFormData = {
      email: 'email',
      password: 'password',
      phone: '0123456789',
    };

    const onErrorMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthSignUp(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.mutateAsync(formData, { onError: onErrorMock });
    });

    await waitFor(() => {
      onErrorMock(formData);
      expect(onErrorMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
    });
  });
});
