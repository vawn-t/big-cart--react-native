import type { Meta, StoryObj } from '@storybook/react-native';

import ProductDetail from '.';

const meta: Meta<typeof ProductDetail> = {
  title: 'Screens/ProductDetail',
  component: ProductDetail,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ProductDetail>>;

export const Base: Story = {
  args: {},
};
