import { ICartItem } from '@models/index';

type CartItemsResponse = { cartItems: ICartItem[] };

type CartItemError = {
  errors: {
    location: string;
    msg: string;
    param: string;
    value: string;
  }[];
};

export type { CartItemsResponse, CartItemError };
