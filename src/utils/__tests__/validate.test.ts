import {
  isDisableSubmitButton,
  validateSignUpForm,
  validateLoginForm,
  validateForgotPasswordFrom,
} from '..';
import { VALIDATION } from '@constants/index';

describe('isDisableSubmitButton', () => {
  it('should return true if any value in formData is empty', () => {
    const formData = { email: '', phoneNumber: '', password: '' };
    expect(isDisableSubmitButton(formData)).toBe(true);
  });

  it('should return false if all values in formData are non-empty', () => {
    const formData = {
      email: 'test@example.com',
      phoneNumber: '1234567890',
      password: 'password123',
    };
    expect(isDisableSubmitButton(formData)).toBe(false);
  });

  it('should return true if only one value in formData is empty', () => {
    const formData = {
      email: 'test@example.com',
      phoneNumber: '',
      password: 'password123',
    };
    expect(isDisableSubmitButton(formData)).toBe(true);
  });
});

describe('validateSignUpForm', () => {
  it('should return errors for missing email, phone, and password', () => {
    const formData = {
      email: '',
      phone: '',
      password: '',
    };

    const result = validateSignUpForm(formData);

    expect(result.errors.email).toBe(VALIDATION.EMAIL.REQUIRED);
    expect(result.errors.phoneNumber).toBe(VALIDATION.PHONE.REQUIRED);
    expect(result.errors.password).toBe(VALIDATION.PASSWORD.REQUIRED);
    expect(result.isFormValid).toBe(false);
  });

  it('should return errors for invalid email, phone, and password', () => {
    const formData = {
      email: 'invalid-email',
      phone: 'invalid-phone',
      password: 'invalid-password',
    };

    const result = validateSignUpForm(formData);

    expect(result.errors.email).toBe(VALIDATION.EMAIL.INVALID);
    expect(result.errors.phoneNumber).toBe(VALIDATION.PHONE.INVALID);
    expect(result.errors.password).toBe(VALIDATION.PASSWORD.INVALID);
    expect(result.isFormValid).toBe(false);
  });

  it('should return errors for invalid password length', () => {
    const formData = {
      email: 'valid-email@example.com',
      phone: '0798850401',
      password: '12345',
    };

    const result = validateSignUpForm(formData);

    expect(result.errors.password).toBe(VALIDATION.PASSWORD.MAX_LENGTH);
    expect(result.isFormValid).toBe(false);
  });

  it('should return no errors for valid form data', () => {
    const formData = {
      email: 'valid-email@example.com',
      phone: '0798850401',
      password: '!Validpassword123',
    };

    const result = validateSignUpForm(formData);

    expect(result.errors).toEqual({});
    expect(result.isFormValid).toBe(true);
  });
});

describe('validateLoginForm', () => {
  it('should return errors for missing email', () => {
    const formData = { email: '', password: 'password' };
    const result = validateLoginForm(formData);
    expect(result.errors.email).toEqual(VALIDATION.EMAIL.REQUIRED);
    expect(result.isFormValid).toBe(false);
  });

  it('should return errors for invalid email', () => {
    const formData = { email: 'not an email', password: 'password' };
    const result = validateLoginForm(formData);
    expect(result.errors.email).toEqual(VALIDATION.EMAIL.INVALID);
    expect(result.isFormValid).toBe(false);
  });

  it('should return errors for missing password', () => {
    const formData = { email: 'email@example.com', password: '' };
    const result = validateLoginForm(formData);
    expect(result.errors.password).toEqual(VALIDATION.PASSWORD.REQUIRED);
    expect(result.isFormValid).toBe(false);
  });

  it('should return errors for password less than 6 characters', () => {
    const formData = { email: 'email@example.com', password: '12345' };
    const result = validateLoginForm(formData);
    expect(result.errors.password).toEqual(VALIDATION.PASSWORD.MAX_LENGTH);
    expect(result.isFormValid).toBe(false);
  });

  it('should return errors for invalid password', () => {
    const formData = { email: 'email@example.com', password: 'password' };
    const result = validateLoginForm(formData);
    expect(result.errors.password).toEqual(VALIDATION.PASSWORD.INVALID);
    expect(result.isFormValid).toBe(false);
  });

  it('should return no errors for valid form data', () => {
    const formData = { email: 'email@example.com', password: '!Password123' };
    const result = validateLoginForm(formData);
    expect(result.errors).toEqual({});
    expect(result.isFormValid).toBe(true);
  });
});

describe('validateForgotPasswordFrom', () => {
  it('should return an object with empty errors and isFormValid=true when email is valid', () => {
    const result = validateForgotPasswordFrom('test@example.com');
    expect(result).toEqual({
      errors: {},
      isFormValid: true,
    });
  });

  it('should return an object with email error message and isFormValid=false when email is empty', () => {
    const result = validateForgotPasswordFrom('');
    expect(result).toEqual({
      errors: {
        email: 'Email is required.',
      },
      isFormValid: false,
    });
  });

  it('should return an object with email error message and isFormValid=false when email is invalid', () => {
    const result = validateForgotPasswordFrom('not_an_email');
    expect(result).toEqual({
      errors: {
        email: 'Email is invalid.',
      },
      isFormValid: false,
    });
  });
});
