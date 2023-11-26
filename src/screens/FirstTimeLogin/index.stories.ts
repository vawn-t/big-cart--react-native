import type { Meta, StoryObj } from '@storybook/react-native';

import FirstTimeLogin from '.';

const meta: Meta<typeof FirstTimeLogin> = {
  title: 'Screens/FirstTimeLogin',
  component: FirstTimeLogin,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof FirstTimeLogin>>;

export const Base: Story = {
  args: {},
};
