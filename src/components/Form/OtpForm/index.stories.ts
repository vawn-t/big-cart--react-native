import type { Meta, StoryObj } from '@storybook/react-native';

import OtpForm from '.';

const meta: Meta<typeof OtpForm> = {
  title: 'Components/OtpForm',
  component: OtpForm,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof OtpForm>>;

export const Base: Story = {
  args: {},
};
