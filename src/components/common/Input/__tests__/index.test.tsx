import { Input } from '@components/common';
import { IconName } from '@interfaces/index';
import { render } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps: React.ComponentProps<typeof Input> = {
  icon: IconName.Email,
  placeholder: 'Enter the email',
};

const setup = (overrideProp = {}) => {
  const props = { ...ownProps, ...overrideProp };

  return render(<Input {...props} />);
};

describe('Input component', () => {
  it('renders correctly', () => {
    const tree = setup();
    expect(tree).toMatchSnapshot();
  });
});
