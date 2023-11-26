import { act, renderHook } from '@testing-library/react-hooks';
import useAuthLogin from '../useAuthLogin';
import { LoginFormData } from '@interfaces/index';
import { createWrapper } from '@utils/testProvider';

// Mocking the login service function
jest.mock('@services/auth', () => ({
  login: jest.fn(),
}));

describe('useAuthLogin', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    const formData: LoginFormData = {
      email: 'email',
      password: 'password',
    };

    const onSuccessMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthLogin(), {
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
    const formData: LoginFormData = {
      email: 'email',
      password: 'password',
    };

    const onErrorMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthLogin(), {
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
