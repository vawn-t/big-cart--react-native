import { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Switch, TextInput, View } from 'react-native';

// Components
import { Button, Input, Typography } from '@components/common';

// Types
import {
  FontWeight,
  IconName,
  LoginFormData,
  RootStackParamList,
} from '@interfaces/index';

// Constants
import { ScreenNames } from '@constants/navigation';

// Utils
import { isDisableSubmitButton } from '@utils/index';

// Stores
import useAuthenticator from '@hooks/useAuthenticator';

// Styles
import styles from './styles';

const LoginForm = () => {
  const [isSwitchEnabled, setIsEnabled] = useState(false);

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  // Refs
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Hooks
  const { isLoading, errors, login, clearEmailError, clearPasswordError } =
    useAuthenticator();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Login>
    >();

  const handleLogin = useCallback(() => {
    emailRef.current?.blur();
    passwordRef.current?.blur();

    login(formData);
  }, [formData]);

  const handleFocusEmail = useCallback(() => {
    clearEmailError();
  }, []);

  const handleFocusPassword = useCallback(() => {
    clearPasswordError();
  }, []);

  const handleNavigateToForgotPassword = () => {
    navigation.navigate(ScreenNames.ForgotPassword);
  };

  const handleRememberPassword = useCallback(() => {
    setIsEnabled((previousState) => !previousState);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input
          ref={emailRef}
          icon={IconName.Email}
          placeholder="Email Address"
          autoComplete="email"
          keyboardType="email-address"
          isError={!!errors.email}
          onChangeText={(email) => setFormData((prev) => ({ ...prev, email }))}
          onFocus={handleFocusEmail}
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
      </View>
      <View style={styles.optionWrapper}>
        <View style={styles.rememberMe}>
          <Switch onChange={handleRememberPassword} value={isSwitchEnabled} />
          <Typography text="Remember me" fontWeight={FontWeight.Medium} />
        </View>

        <Typography
          text="Forgot Password"
          style={styles.forgotPassword}
          onPress={handleNavigateToForgotPassword}
          fontWeight={FontWeight.Medium}
        />
      </View>
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={isDisableSubmitButton(formData) || isLoading}
        testID="login-submit"
      />
    </View>
  );
};

export default LoginForm;
