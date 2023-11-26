import { createWrapper } from '@utils/testProvider';
import useCartItemDelete from '../useCartItemDelete';
import { act, renderHook } from '@testing-library/react-hooks';
import * as cart from '@services/cart';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('useCartItemDelete', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    jest.spyOn(cart, 'deleteCartItem').mockResolvedValue({});

    const { result, waitFor } = renderHook(() => useCartItemDelete(), {
      wrapper: createWrapper(),
    });

    const onSuccessMock = jest.fn();

    act(() => {
      result.current.mutateAsync(1, { onSuccess: onSuccessMock });
    });

    await waitFor(() => {
      onSuccessMock();
      expect(onSuccessMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
    });
  });
});
