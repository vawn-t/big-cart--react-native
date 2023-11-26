import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@interfaces/navigation';

// Constants
import { ScreenNames } from '@constants/index';

// Components
import { BackIcon } from '@components/Icon';
import { Typography } from '@components/common';

// Themes
import { colors } from '@themes/index';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Styles
import styles from './styles';

const Header = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Cart>
    >();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      <BackIcon
        color={colors.text.secondary}
        style={styles.backIcon}
        onPress={handleGoBack}
      />
      <Typography
        text="Shopping Cart"
        variant={TypoVariant.Paragraph2}
        size={SizeType.Large}
        fontWeight={FontWeight.Medium}
      />
    </View>
  );
};

export default Header;
