import { act, renderHook } from '@testing-library/react-hooks';

import { ResendCodePayload } from '@interfaces/index';
import { createWrapper } from '@utils/testProvider';
import useAuthResendOTP from '../useAuthResendOtp';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Mocking the login service function
jest.mock('@services/auth', () => ({
  resendOtp: jest.fn(),
}));

describe('useAuthResendOTP', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    const formData: ResendCodePayload = {
      phone: '0123456790',
    };

    const onSuccessMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthResendOTP(), {
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
    const formData: ResendCodePayload = {
      phone: '0123456790',
    };

    const onErrorMock = jest.fn();

    const { result, waitFor } = renderHook(() => useAuthResendOTP(), {
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
