import { CartItem, ICartItem } from '..';

describe('CartItem', () => {
  it('should create a CartItem with the correct properties', () => {
    const item: ICartItem = {
      id: 1,
      productId: 2,
      quantity: 3,
    };
    const cartItem = new CartItem(item);
    expect(cartItem.id).toBe(item.id);
    expect(cartItem.productId).toBe(item.productId);
    expect(cartItem.quantity).toBe(item.quantity);
  });

  it('should set the price property if provided', () => {
    const item: ICartItem = {
      id: 1,
      productId: 2,
      quantity: 3,
    };
    const cartItem = new CartItem(item);
    expect(cartItem.price).toBeUndefined();

    const itemWithPrice: ICartItem = {
      ...item,
      price: 10.99,
    };
    const cartItemWithPrice = new CartItem(itemWithPrice);
    expect(cartItemWithPrice.price).toBe(itemWithPrice.price);
  });
});
