import { useState, useRef, useCallback, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-root-toast';

// Themes
import { colors } from '@themes/index';

// Components
import { Button, Typography } from '@components/common';

// Types
import { FontWeight, RootStackParamList, TypoVariant } from '@interfaces/index';

// Constants
import { SUCCESS, ScreenNames } from '@constants/index';

// Hooks
import useAuthVerifyCode from '@hooks/useAuth/useAuthVerifyCode';
import useAuthResendOTP from '@hooks/useAuth/useAuthResendOtp';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

interface IProps {
  length?: number;
}

const OtpInput = ({ length = 6 }: IProps) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.VerifyNumber>
    >();

  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const inputRefs = useRef<TextInput[]>([]);

  // Queries
  const {
    mutateAsync: verifyCodeMutate,
    isPending: isVerifyCodePending,
    isSuccess: isVerifyCodeSuccess,
    isError: isVerifyCodeError,
    error: verifyCodeError,
  } = useAuthVerifyCode();

  const {
    mutateAsync: resendOtpMutate,
    isSuccess: isResendOtpSuccess,
    error: resendOtpError,
  } = useAuthResendOTP();

  // Stores
  const phone = useStore.use.phone();

  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  useEffect(() => {
    if (isVerifyCodeSuccess) {
      Toast.show(SUCCESS.SIGNUP.VERIFIED);

      navigation.navigate(ScreenNames.Login);
    } else if (isVerifyCodeError) {
      if (verifyCodeError.response?.data.errors?.length) {
        Toast.show(verifyCodeError.response.data.errors[0].msg);
      } else {
        Toast.show(verifyCodeError.message);
      }
    }
  }, [isVerifyCodeSuccess, isVerifyCodeError, verifyCodeError]);

  useEffect(() => {
    if (isResendOtpSuccess) {
      Toast.show(SUCCESS.RESEND_OTP);
    } else if (resendOtpError) {
      Toast.show(resendOtpError.message);
    }
  }, [isResendOtpSuccess, resendOtpError, resendOtpError]);

  useEffect(() => {
    // Auto submit form when all fields are filled
    if (isAllFieldsFilled) {
      verifyCodeMutate({ code: otp.join('') });
    }
  }, [isAllFieldsFilled]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }

    const allFieldsFilled = newOtp.every((value) => value !== '');
    setIsAllFieldsFilled(allFieldsFilled);
  };

  const handleOtpKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0) {
      // Moves the cursor to the previous input
      inputRefs.current[index - 1].focus();

      // Sets selection to the previous input
      inputRefs.current[index - 1].setNativeProps({
        selection: {
          start: 0,
          end: 1,
        },
      });
    }
  };

  const handleNextButton = () => {
    if (isAllFieldsFilled) {
      verifyCodeMutate({ code: otp.join('') });
    }
  };

  const handleResendCode = useCallback(() => {
    if (phone) {
      resendOtpMutate({ phone });
    }
  }, [phone]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          {Array(length)
            .fill('')
            .map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref as TextInput)}
                style={styles.input}
                maxLength={1}
                onChangeText={(value) => handleOtpChange(index, value)}
                onKeyPress={({ nativeEvent: { key } }) =>
                  handleOtpKeyPress(index, key)
                }
                value={otp[index]}
                placeholder="●"
                placeholderTextColor={colors.text.secondary}
                keyboardType="numeric"
              />
            ))}
        </View>
        <Button
          title="Next"
          onPress={handleNextButton}
          disabled={!isAllFieldsFilled || isVerifyCodePending}
        />
      </View>

      <View style={styles.helperContent}>
        <Typography
          text={`Didn't receive the code ?`}
          variant={TypoVariant.Paragraph2}
        />

        <Typography
          text="Resend a new code"
          variant={TypoVariant.Paragraph2}
          fontWeight={FontWeight.Medium}
          onPress={handleResendCode}
        />
      </View>
    </View>
  );
};

export default OtpInput;
