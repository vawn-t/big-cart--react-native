import { render } from '@utils/testProvider';
import HistorySearch from '..';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('HistorySearch component', () => {
  const setup = () => {
    return render(<HistorySearch />);
  };

  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers the "handleClearSeachHistory" function when "clear" is pressed', () => {
    // TODO: should do
  });
});
