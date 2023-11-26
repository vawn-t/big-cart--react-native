import type { Meta, StoryObj } from '@storybook/react-native';

import SearchResult from '.';
import { Product } from '@models/index';

const meta: Meta<typeof SearchResult> = {
  title: 'Components/SearchResult',
  component: SearchResult,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof SearchResult>>;

const DATA: Product[] = [
  {
    id: 1,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 3,
    price: 1,
    categoryId: 2,
  },
  {
    id: 2,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 0,
    price: 1,
    categoryId: 2,
  },
  {
    id: 3,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 3,
    price: 1,
    categoryId: 2,
  },
];

export const Base: Story = {
  args: { results: DATA },
};

export const NotFound: Story = {
  args: {},
};
