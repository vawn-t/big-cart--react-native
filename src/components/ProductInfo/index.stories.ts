import type { Meta, StoryObj } from '@storybook/react-native';

import ProductDetail from '.';

const meta: Meta<typeof ProductDetail> = {
  title: 'Components/ProductDetail',
  component: ProductDetail,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ProductDetail>>;

export const Base: Story = {
  args: {
    id: 1,
    description:
      'Organic Mountain works as a seller for many organic growers of organic lemons. Organic lemons are easy to spot in your produce aisle. They are just like regular lemons, but they will usually have a few more scars on the outside of the lemon skin. Organic lemons are considered to be the world`s finest lemon for juicing',
    productUnitId: 1,
    price: 2.22,
    name: 'Organic Lemons',
  },
};
