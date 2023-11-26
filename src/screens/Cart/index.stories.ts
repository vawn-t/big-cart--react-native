import type { Meta, StoryObj } from '@storybook/react-native';

import Cart from '.';

const meta: Meta<typeof Cart> = {
  title: 'Screens/Cart',
  component: Cart,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Cart>>;

export const Base: Story = {
  args: {},
};
