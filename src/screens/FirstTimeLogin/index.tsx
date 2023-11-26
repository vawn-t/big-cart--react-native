import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Layouts
import { AuthLayout } from '@layouts/index';

// Types
import { RootStackParamList } from '@interfaces/navigation';

// Constants
import { ScreenNames } from '@constants/index';

// Components
import { Button } from '@components/common';

// Types
import { IconName } from '@interfaces/icon';

// Images
import { Images } from '@assets/images';

const FirstTimeLogin = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.FirstTimeLogin>
    >();

  const handleNavigate = useCallback(() => {
    navigation.navigate(ScreenNames.SignUp);
  }, []);

  return (
    <AuthLayout
      description="Lorem ipsum dolorr sit amet, consetetur 
    sadipscing elitr, sed diam nonumy"
      title="Welcome"
      image={Images.firstTimeLogin}
    >
      <Button
        title="Create an account"
        icon={IconName.User}
        onPress={handleNavigate}
      />
    </AuthLayout>
  );
};

export default FirstTimeLogin;
