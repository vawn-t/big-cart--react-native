import type { Meta, StoryObj } from '@storybook/react-native';

import Button from '.';
import { IconName } from '@interfaces/index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Button>>;

export const ButtonWithoutIcon: Story = {
  args: {
    title: 'Get started',
  },
};

export const ButtonWithinIcon: Story = {
  args: {
    title: 'Create an account',
    icon: IconName.User,
  },
};
