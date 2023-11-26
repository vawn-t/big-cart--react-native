import type { Meta, StoryObj } from '@storybook/react-native';

import Search from '.';

const meta: Meta<typeof Search> = {
  title: 'Screens/Search',
  component: Search,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Search>>;

export const Base: Story = {
  args: {},
};
