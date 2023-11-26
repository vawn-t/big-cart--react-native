import type { Meta, StoryObj } from '@storybook/react-native';

import VerifyNumber from '.';

const meta: Meta<typeof VerifyNumber> = {
  title: 'Screens/VerifyNumber',
  component: VerifyNumber,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof VerifyNumber>>;

export const Base: Story = {
  args: {},
};
