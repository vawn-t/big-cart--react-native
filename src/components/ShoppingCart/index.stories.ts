import type { Meta, StoryObj } from '@storybook/react-native';

import ShoppingCart from '.';
import { products } from '@mocks/index';

const meta: Meta<typeof ShoppingCart> = {
  title: 'Components/ShoppingCart',
  component: ShoppingCart,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ShoppingCart>>;

export const Base: Story = {
  args: { cartItemIds: products.map((product) => product.id) },
};

export const EmptyCart: Story = {
  args: { cartItemIds: [] },
};
