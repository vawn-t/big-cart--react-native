import { ProductUnit } from '..';

describe('ProductUnit', () => {
  it('should create an instance of ProductUnit', () => {
    const productUnit = new ProductUnit({ id: 1, name: 'Test Product' });
    expect(productUnit).toBeInstanceOf(ProductUnit);
  });

  it('should set the id correctly', () => {
    const productUnit = new ProductUnit({ id: 1, name: 'Test Product' });
    expect(productUnit.id).toBe(1);
  });

  it('should set the name correctly', () => {
    const productUnit = new ProductUnit({ id: 1, name: 'Test Product' });
    expect(productUnit.name).toBe('Test Product');
  });
});
