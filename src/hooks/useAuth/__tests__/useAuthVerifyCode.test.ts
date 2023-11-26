import { act, renderHook } from '@testing-library/react-hooks';

import { VerifyCodePayload } from '@interfaces/index';
import { createWrapper } from '@utils/testProvider';
import useAuthVerifyCode from '../useAuthVerifyCode';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Mocking the login service function
jest.mock('@services/auth', () => ({
  verifyCode: jest.fn(),
}));

describe('useAuthResendOTP', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    const formData: VerifyCodePayload = {
      code: '123456',
    };

    const onSuccessMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthVerifyCode(), {
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
    const formData: VerifyCodePayload = {
      code: '123456',
    };

    const onErrorMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthVerifyCode(), {
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
