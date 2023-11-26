import { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { CartLargeIcon } from '@components/Icon';
import { Typography, Button } from '@components/common';

// Types
import {
  SizeType,
  TypoVariant,
  RootStackParamList,
  FontWeight,
} from '@interfaces/index';

// Styles
import styles from './styles';

// Constants
import { ScreenNames } from '@constants/index';

const EmptyCart = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Cart>
    >();

  const handleStartShopping = useCallback(() => {
    navigation.navigate(ScreenNames.HomeStack);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CartLargeIcon />
        <Typography
          text="Your cart is empty !"
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        />
        <Typography
          text="You will get a response within a few minutes."
          style={styles.subtitle}
        />
      </View>
      <Button title="Start shopping" onPress={handleStartShopping} />
    </View>
  );
};

export default EmptyCart;
