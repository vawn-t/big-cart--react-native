import {
  addToCart,
  deleteCartItem,
  getCartItemList,
  updateCartItem,
} from '..';
import { ROUTES } from '@constants/index';
import { DELETE, GET, PATCH, POST } from '@services/clientRequest';

jest.mock('@services/clientRequest');

describe('cart service', () => {
  describe('getCartItemList', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return cart item list', async () => {
      await getCartItemList();

      expect(GET).toHaveBeenCalledWith(ROUTES.CART.GET_ALL);
    });
  });

  describe('addToCart', () => {
    it('should call POST with the correct parameters', async () => {
      const productId = 1;
      const quantity = 2;

      await addToCart(productId, quantity);

      expect(POST).toHaveBeenCalledWith(ROUTES.CART.ADD, {
        productId,
        quantity,
      });
    });
  });

  describe('deleteCartItem', () => {
    it('should call DELETE with the correct parameters', async () => {
      const id = 1;

      await deleteCartItem(id);

      expect(DELETE).toHaveBeenCalledWith(ROUTES.CART.deleteByProductId(id));
    });
  });

  describe('updateCartItem', () => {
    it('should call PATCH with the correct parameters', async () => {
      const id = 1;
      const quantity = 2;

      await updateCartItem(id, quantity);

      expect(PATCH).toHaveBeenCalledWith(ROUTES.CART.updateCartItem(id), {
        quantity,
      });
    });
  });
});
