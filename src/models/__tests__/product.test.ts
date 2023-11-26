import { Product } from '..';

describe('Product', () => {
  it('should create a new Product instance', () => {
    const product = new Product({
      id: 1,
      productUnitId: 1,
      description: 'Test product',
      quantityStock: 10,
      name: 'Test',
      price: 9.99,
      image: 'test.jpg',
      categoryId: 1,
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBe(1);
    expect(product.productUnitId).toBe(1);
    expect(product.description).toBe('Test product');
    expect(product.name).toBe('Test');
    expect(product.quantityStock).toBe(10);
    expect(product.price).toBe(9.99);
    expect(product.image).toBe('test.jpg');
    expect(product.categoryId).toBe(1);
  });
});
