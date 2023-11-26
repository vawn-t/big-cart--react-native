import type { Meta, StoryObj } from '@storybook/react-native';

import Categories from '.';

const meta: Meta<typeof Categories> = {
  title: 'Components/Categories',
  component: Categories,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Categories>>;

export const Base: Story = {
  args: {},
};
