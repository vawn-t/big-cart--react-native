import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-root-toast';

// Components
import { Button, Input } from '@components/common';

// Types
import { IconName, RootStackParamList } from '@interfaces/index';

// Constants
import { SUCCESS, ScreenNames } from '@constants/index';

// Utils
import { validateForgotPasswordFrom } from '@utils/index';

// Hooks
import useAuthResetPassword from '@hooks/useAuth/useAuthResetPassword';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.ForgotPassword>
    >();

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useAuthResetPassword();

  // Stores
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();

  useEffect(() => {
    if (isSuccess) {
      disableLoading();

      Toast.show(SUCCESS.passwordSentToEmail(email));

      navigation.navigate(ScreenNames.Login);
    } else if (isError) {
      disableLoading();

      if (error.response?.data.errors?.length) {
        Toast.show(error.response.data.errors[0].msg);
      } else {
        Toast.show(error.message);
      }
    }
  }, [isSuccess, isError, error]);

  const handleSendOTP = useCallback(() => {
    const { errors, isFormValid } = validateForgotPasswordFrom(email);

    if (!isFormValid) {
      // Show the first error on Toast
      Toast.show(Object.values(errors)[0] as string);

      return;
    }

    mutateAsync(email);
    enableLoading();
  }, [email]);

  return (
    <View style={styles.container}>
      <Input
        icon={IconName.Email}
        placeholder="Email Address"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Button
        title="Reset Password"
        onPress={handleSendOTP}
        disabled={!email || isPending}
      />
    </View>
  );
};

export default ForgotPasswordForm;
