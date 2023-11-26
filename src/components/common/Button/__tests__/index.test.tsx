import { fireEvent, render, screen } from '@utils/index';
import { Button } from '@components/common';
import { IconName } from '@interfaces/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const ownProps: React.ComponentProps<typeof Button> = {
  onPress: jest.fn(),
  title: 'Hello world',
  icon: IconName.Password,
};

const setup = (overrideProp = {}) => {
  const props = { ...ownProps, ...overrideProp };

  return render(<Button {...props} />);
};

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = setup();
    expect(tree).toMatchSnapshot();
  });

  it('onPress should be called', () => {
    setup();
    fireEvent.press(screen.getByText(ownProps.title));

    expect(ownProps.onPress).toHaveBeenCalled();
  });

  it('should render icon', () => {
    setup({ icon: IconName.User });

    expect(screen.getByTestId('Button-icon')).toBeTruthy();
  });
});
