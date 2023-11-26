import type { Meta, StoryObj } from '@storybook/react-native';

import VerticalCards from '.';

const meta: Meta<typeof VerticalCards> = {
  title: 'Components/VerticalCards',
  component: VerticalCards,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof VerticalCards>>;

export const Base: Story = {
  args: {},
};
