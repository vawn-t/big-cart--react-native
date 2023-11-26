import LoadingIndicator from '..';
import { render } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('LoadingIndicator', () => {
  it('renders the loading indicator', () => {
    const { getByTestId } = render(<LoadingIndicator />);
    const indicator = getByTestId('loading-indicator');

    expect(indicator).toBeTruthy();
  });
});
