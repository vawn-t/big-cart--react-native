import type { Meta, StoryObj } from '@storybook/react-native';

import FeaturedProducts from '.';

const meta: Meta<typeof FeaturedProducts> = {
  title: 'Components/FeaturedProducts',
  component: FeaturedProducts,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof FeaturedProducts>>;

export const Base: Story = {
  args: {},
};
