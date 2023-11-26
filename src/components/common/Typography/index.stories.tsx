import type { Meta, StoryObj } from '@storybook/react-native';

import Typography from '.';
import { SizeType, TypoVariant } from '@interfaces/index';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Typography>>;

export const Paragraph1: Story = {
  args: {
    text: 'Paragraph1',
    variant: TypoVariant.Paragraph1,
    size: SizeType.Default,
  },
};

export const Paragraph2: Story = {
  args: {
    text: 'Paragraph2',
    variant: TypoVariant.Paragraph2,
    size: SizeType.Small,
  },
};
