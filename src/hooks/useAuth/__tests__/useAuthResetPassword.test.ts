import { act, renderHook } from '@testing-library/react-hooks';

import { createWrapper } from '@utils/testProvider';
import useAuthResetPassword from '../useAuthResetPassword';

// Mocking the login service function
jest.mock('@services/auth', () => ({
  resetPassword: jest.fn(),
}));

describe('useAuthResetPassword', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    const email: string = 'email@gamail.com';

    const onSuccessMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthResetPassword(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.mutateAsync(email, { onSuccess: onSuccessMock });
    });

    await waitFor(() => {
      onSuccessMock(email);
      expect(onSuccessMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
    });
  });

  it('should call onError when mutateAsync is failure', async () => {
    const email: string = 'email@gamail.com';

    const onErrorMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthResetPassword(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.mutateAsync(email, { onError: onErrorMock });
    });

    await waitFor(() => {
      onErrorMock(email);
      expect(onErrorMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
    });
  });
});
