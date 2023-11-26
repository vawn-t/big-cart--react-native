import type { Meta, StoryObj } from '@storybook/react-native';

import LoginFormData from '.';

const meta: Meta<typeof LoginFormData> = {
  title: 'Components/LoginForm',
  component: LoginFormData,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof LoginFormData>>;

export const Base: Story = {
  args: {},
};
