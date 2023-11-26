import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
  it('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('initialValue'));

    expect(result.current).toBe('initialValue');
  });

  it('should debounce the value', () => {
    jest.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ value, delay }: { value: string; delay: number }) =>
        useDebounce(value, delay),
    );

    rerender({ value: 'updatedValue', delay: 500 });

    expect(result.current).toBe('updatedValue');

    jest.useRealTimers();
  });
});
