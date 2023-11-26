import type { Meta, StoryObj } from '@storybook/react-native';

import EmptyCart from '.';

const meta: Meta<typeof EmptyCart> = {
  title: 'Components/EmptyCart',
  component: EmptyCart,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof EmptyCart>>;

export const Base: Story = {
  args: {},
};
