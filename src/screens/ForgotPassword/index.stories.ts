import type { Meta, StoryObj } from '@storybook/react-native';

import ForgotPassword from '.';

const meta: Meta<typeof ForgotPassword> = {
  title: 'Screens/ForgotPassword',
  component: ForgotPassword,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ForgotPassword>>;

export const Base: Story = {
  args: {},
};
