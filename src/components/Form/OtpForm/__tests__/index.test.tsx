import OtpForm from '..';
import { render, fireEvent } from '@utils/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const setup = () => {
  return render(<OtpForm />);
};

describe('OtpInput component', () => {
  it('renders correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  xit('updates the OTP input when the user types in it', () => {
    const { getAllByPlaceholderText } = setup();

    // Find all the OTP input elements by placeholder text
    const otpInputs = getAllByPlaceholderText('●');

    // Simulate typing in each input
    otpInputs.forEach((input) => {
      fireEvent.changeText(input, '1'); // You can change the value as needed
    });

    otpInputs.forEach((_, index) => {
      expect(otpInputs[index]).toHaveProp('value', '1');
    });
  });
});
