import { removeById, createById } from '..';

describe('removeById', () => {
  it('should remove an item from the byId object by its id', () => {
    const byId = {
      1: { id: 1, name: 'Item 1' },
      2: { id: 2, name: 'Item 2' },
      3: { id: 3, name: 'Item 3' },
    };

    const removed = removeById(byId, 2);

    expect(removed).toEqual({
      1: { id: 1, name: 'Item 1' },
      3: { id: 3, name: 'Item 3' },
    });
  });
});

describe('createById', () => {
  it('should create a new byId object from an array of items', () => {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];

    const byId = createById(items);

    expect(byId).toEqual({
      1: { id: 1, name: 'Item 1' },
      2: { id: 2, name: 'Item 2' },
      3: { id: 3, name: 'Item 3' },
    });
  });
});
