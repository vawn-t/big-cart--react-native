import '@testing-library/jest-native';

import SearchBar from '..';
import { act, fireEvent, render, screen, waitFor } from '@utils/index';
import { renderHook } from '@testing-library/react-hooks';
import useStore from '@stores/useStore';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const setup = (overrideProps = {}) => {
  return render(<SearchBar {...overrideProps} />);
};

describe('SearchBar component', () => {
  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('render correct currentSearchValue', () => {
    setup({ currentSearchValue: 'test' });

    expect(screen.getByDisplayValue('test')).toBeTruthy();
  });

  it('render should update currentSearchValue in store correctly', () => {
    const { result } = renderHook(() => useStore());

    setup();

    fireEvent.changeText(
      screen.getByPlaceholderText('Search keywords..'),
      'test',
    );

    act(() => {
      result.current.setCurrentSearchItem('test');
    });

    expect(result.current.currentSearchValue).toBe('test');

    fireEvent.changeText(screen.getByDisplayValue('test'), '');

    expect(result.current.currentSearchValue).toBe('');
  });

  it('should handle search correctly', async () => {
    const { result } = renderHook(() => useStore());
    setup();

    const input = screen.getByPlaceholderText('Search keywords..');

    act(() => {
      // fireEvent.changeText(input, 'test search');
      fireEvent(input, 'submitEditing', {
        nativeEvent: { text: 'test search' },
      });
    });

    await waitFor(() => {
      expect(result.current.searchHistory.includes('test search')).toBeTruthy();
    });
  });
});
