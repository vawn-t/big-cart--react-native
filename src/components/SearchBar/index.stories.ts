import type { Meta, StoryObj } from '@storybook/react-native';

import SearchBar from '.';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof SearchBar>>;

export const Base: Story = {
  args: {},
};
