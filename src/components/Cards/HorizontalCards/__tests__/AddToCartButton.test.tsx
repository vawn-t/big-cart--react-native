import React from 'react';
import * as ReactQuery from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';

// Tests
import { act, render, screen } from '@utils/index';

// Store
import { useStore } from '@stores/useStore';

// Mocks
import { cartList } from '@mocks/cart';

// Components
import AddToCartButton from '../AddToCartButton';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps: React.ComponentProps<typeof AddToCartButton> = {
  productId: 1,
};

const setup = (overrideProps = {}) => {
  const props = { ...ownProps, overrideProps };

  return render(<AddToCartButton {...props} />);
};

describe('AddToCartButton component', () => {
  // Create data in store
  const { result } = renderHook(() => useStore());

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the "Add to cart" button when cartItem is present', () => {
    act(() => {
      result.current.setCartItems([]);
    });

    const addToCart = jest.fn();

    jest.doMock('@tanstack/react-query', () => {
      const original: typeof ReactQuery = jest.requireActual(
        '@tanstack/react-query',
      );

      return {
        ...original,
        useMutation: jest
          .fn()
          .mockReturnValue(() => ({ mutateAsync: addToCart })),
      };
    });

    setup();

    const addToCartButton = screen.getByText('Add to cart');
    expect(addToCartButton).toBeTruthy();
  });

  it('renders the quantity buttons when cartItem is present', () => {
    act(() => {
      result.current.setCartItems(cartList);
    });

    setup();

    const increaseButton = screen.getByTestId('increase-button');
    const decreaseButton = screen.getByTestId('decrease-button');

    expect(increaseButton).toBeTruthy();
    expect(decreaseButton).toBeTruthy();
  });
});
