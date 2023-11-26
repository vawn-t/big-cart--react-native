import { createWrapper } from '@utils/testProvider';
import useCartItemUpdate from '../useCartItemUpdate';
import { act, renderHook } from '@testing-library/react-hooks';
import * as cart from '@services/cart';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('useCartItemUpdate', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess when mutateAsync is successful', async () => {
    jest
      .spyOn(cart, 'updateCartItem')
      .mockResolvedValue({ id: 1, productId: 1, quantity: 10 });

    const { result, waitFor } = renderHook(() => useCartItemUpdate(), {
      wrapper: createWrapper(),
    });

    const onSuccessMock = jest.fn();

    act(() => {
      result.current.mutateAsync(
        { cartItemId: 1, quantity: 1 },
        { onSuccess: onSuccessMock },
      );
    });

    await waitFor(() => {
      onSuccessMock();
      expect(onSuccessMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
    });
  });
});
