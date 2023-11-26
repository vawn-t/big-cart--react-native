import { login, resendOtp, resetPassword, signUp, verifyCode } from '..';
import { POST } from '@services/clientRequest';
import { LoginFormData, SignUpFormData } from '@interfaces/index';
import { ROUTES } from '@constants/index';

jest.mock('@services/clientRequest');

describe('auth service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should call POST with the correct arguments', async () => {
      const formData: LoginFormData = { email: 'test', password: 'password' };
      await login(formData);
      expect(POST).toHaveBeenCalledWith(ROUTES.AUTH.LOGIN, formData);
    });
  });

  describe('signUp', () => {
    it('should call POST with the correct arguments and return the expected response', async () => {
      const mockPost = jest.fn();
      mockPost.mockResolvedValue({});

      const formData: SignUpFormData = {
        email: 'test',
        phone: 'test',
        password: 'test',
      };

      await signUp(formData);

      expect(POST).toHaveBeenCalledWith(ROUTES.AUTH.SIGNUP, formData);
    });
  });

  describe('verifyCode', () => {
    it('should call POST with the correct parameters', async () => {
      const code = '123456';

      await verifyCode(code);

      expect(POST).toHaveBeenCalledWith(ROUTES.AUTH.VERIFY_CODE, { otp: code });
    });
  });

  describe('resetPassword', () => {
    it('should call the POST function with the correct arguments', async () => {
      const mockEmail = 'test@example.com';

      await resetPassword(mockEmail);

      expect(POST).toHaveBeenCalledWith(ROUTES.AUTH.RESET_PASSWORD, {
        email: mockEmail,
      });
    });
  });

  it('should call POST with the correct parameters', async () => {
    const phone = '1234567890';
    const expectedData = { phone };

    await resendOtp(phone);

    expect(POST).toHaveBeenCalledWith(ROUTES.AUTH.RESEND_OTP, expectedData);
  });
});
