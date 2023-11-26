import type { Meta, StoryObj } from '@storybook/react-native';

import Onboarding from '.';

const meta: Meta<typeof Onboarding> = {
  title: 'Screens/Onboarding',
  component: Onboarding,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Onboarding>>;

export const Base: Story = {
  args: {},
};
