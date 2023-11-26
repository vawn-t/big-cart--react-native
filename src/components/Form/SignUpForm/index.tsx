import { useCallback, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

// Components
import { Button, Input } from '@components/common';

// Types
import { IconName, SignUpFormData, SignUpFormErrors } from '@interfaces/index';

// Utils
import { isDisableSubmitButton } from '@utils/index';

// Hooks
import useAuthenticator from '@hooks/useAuthenticator';

// Styles
import styles from './styles';

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    phone: '',
    password: '',
  });

  // Refs
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Hooks
  const {
    isLoading,
    errors,
    clearEmailError,
    clearPasswordError,
    clearPhoneNumberError,
    signUp,
  } = useAuthenticator();

  const handleSubmitForm = () => {
    emailRef.current?.blur();
    passwordRef.current?.blur();

    signUp(formData);
  };

  const handleFocusEmail = useCallback(() => {
    clearEmailError();
  }, []);

  const handleFocusPassword = useCallback(() => {
    clearPasswordError();
  }, []);

  const handleFocusPhone = useCallback(() => {
    clearPhoneNumberError();
  }, []);

  return (
    <View style={styles.container}>
      <Input
        ref={emailRef}
        icon={IconName.Email}
        placeholder="Email address"
        keyboardType="email-address"
        isError={!!errors.email}
        onChangeText={(email) => setFormData((prev) => ({ ...prev, email }))}
        onFocus={handleFocusEmail}
      />

      <Input
        ref={phoneRef}
        icon={IconName.Phone}
        placeholder="Phone number"
        keyboardType="numeric"
        isError={!!(errors as SignUpFormErrors).phoneNumber}
        onChangeText={(phone) => setFormData((prev) => ({ ...prev, phone }))}
        onFocus={handleFocusPhone}
      />

      <Input
        ref={passwordRef}
        icon={IconName.Password}
        placeholder="● ● ● ● ● ●"
        autoComplete="password"
        isError={!!errors.password}
        onChangeText={(password) =>
          setFormData((prev) => ({ ...prev, password }))
        }
        onFocus={handleFocusPassword}
      />

      <Button
        title="Signup"
        style={styles.submitButton}
        onPress={handleSubmitForm}
        disabled={isDisableSubmitButton(formData) || isLoading}
      />
    </View>
  );
};

export default SignUpForm;
