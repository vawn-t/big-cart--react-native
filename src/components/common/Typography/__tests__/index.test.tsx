import { Typography } from '@components/common';
import { render } from '@utils/testProvider';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps = {
  text: 'Hello, World!',
};

const setup = (props = {}) => {
  return render(<Typography {...ownProps} {...props} />);
};

describe('Typography component', () => {
  it('renders correctly with default props', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with default props', () => {
    const { getByText } = setup();
    const textElement = getByText(ownProps.text);
    expect(textElement).toBeTruthy();
  });
});
