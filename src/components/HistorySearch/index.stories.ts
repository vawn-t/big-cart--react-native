import type { Meta, StoryObj } from '@storybook/react-native';

import HistorySearch from '.';

const meta: Meta<typeof HistorySearch> = {
  title: 'Components/HistorySearch',
  component: HistorySearch,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof HistorySearch>>;

export const Base: Story = {
  args: {},
};
