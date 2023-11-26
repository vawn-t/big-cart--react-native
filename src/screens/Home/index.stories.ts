import type { Meta, StoryObj } from '@storybook/react-native';

import Home from '.';

const meta: Meta<typeof Home> = {
  title: 'Screens/Home',
  component: Home,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Home>>;

export const Base: Story = {
  args: {},
};
