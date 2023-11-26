import type { Meta, StoryObj } from '@storybook/react-native';

import SignUp from '.';

const meta: Meta<typeof SignUp> = {
  title: 'Components/SignUp',
  component: SignUp,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof SignUp>>;

export const Base: Story = {
  args: {},
};
