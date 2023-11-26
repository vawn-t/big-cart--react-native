import type { Meta, StoryObj } from '@storybook/react-native';

import Login from '.';

const meta: Meta<typeof Login> = {
  title: 'Screens/Login',
  component: Login,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Login>>;

export const Base: Story = {
  args: {},
};
