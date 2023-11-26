import type { Meta, StoryObj } from '@storybook/react-native';

import Input from '.';
import { IconName } from '@interfaces/index';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Input>>;

export const Email: Story = {
  args: {
    placeholder: 'Enter an email',
    autoComplete: 'email',
    icon: IconName.Email,
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    autoComplete: 'password',
    icon: IconName.Password,
  },
};
