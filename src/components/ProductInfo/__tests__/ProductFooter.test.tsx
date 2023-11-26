import { act, renderHook } from '@testing-library/react-hooks';

// Tests
import { createWrapper, fireEvent, render, screen } from '@utils/index';

// Components
import ProductFooter from '../ProductFooter';

// Services
import * as cart from '@services/cart';

// Hooks
import useCartItemAdd from '@hooks/useCart/useCartItemAdd';
import useStore from '@stores/useStore';
import { cartList } from '@mocks/cart';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps: React.ComponentProps<typeof ProductFooter> = {
  productId: 1,
};

const setup = (overrideProps = {}) => {
  const props = { ...ownProps, ...overrideProps };

  return render(<ProductFooter {...props} />);
};

describe('ProductFooter component', () => {
  const { result } = renderHook(() => useStore());

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should show onSuccess', async () => {
    setup();
    jest
      .spyOn(cart, 'addToCart')
      .mockResolvedValue({ id: 1, productId: 1, quantity: 1 });

    const { result, waitFor } = renderHook(() => useCartItemAdd(), {
      wrapper: createWrapper(),
    });

    const onSuccessMock = jest.fn();

    act(() => {
      result.current.mutateAsync(
        { productId: 1, quantity: 1 },
        { onSuccess: onSuccessMock },
      );
    });

    await waitFor(() => {
      onSuccessMock();
      expect(onSuccessMock).toHaveBeenCalled();
      expect(result.current.mutateAsync).toEqual(expect.any(Function));
      expect(result.current.isSuccess).toBeTruthy();
    });
  });

  it('should display update quantity correctly', () => {
    result.current.setCartItems(cartList);
    setup();

    expect(screen.getByText('20')).toBeTruthy();

    act(() => {
      fireEvent.press(screen.getByTestId('add-quantity'));
    });

    expect(screen.getByText('21')).toBeTruthy();

    act(() => {
      fireEvent.press(screen.getByTestId('decrease-quantity'));
    });

    expect(screen.getByText('20')).toBeTruthy();
  });
});
