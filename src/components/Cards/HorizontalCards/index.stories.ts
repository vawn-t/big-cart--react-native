import type { Meta, StoryObj } from '@storybook/react-native';

import HorizontalCards from '.';

const meta: Meta<typeof HorizontalCards> = {
  title: 'Components/HorizontalCards',
  component: HorizontalCards,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof HorizontalCards>>;

export const AddToCart: Story = {
  args: {},
};
