import { areEqual } from '..';

describe('areEqual', () => {
  it('should return true if the objects are equal', () => {
    const prevProps = { name: 'John', age: 30 };
    const nextProps = { name: 'John', age: 30 };
    expect(areEqual(prevProps, nextProps)).toBe(true);
  });

  it('should return false if the objects are not equal', () => {
    const prevProps = { name: 'John', age: 30 };
    const nextProps = { name: 'Jane', age: 30 };
    expect(areEqual(prevProps, nextProps)).toBe(false);
  });
});
