import { memo, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Themes
import { colors } from '@themes/colors';

// Components
import { Typography } from '@components/common';
import { BackIcon } from '../Icon';

// Types
import { RootStackParamList, SizeType } from '@interfaces/index';

// Styles
import styles from './styles';

interface IProps {
  isDarkText?: boolean;
  title?: string;
}

const Header = ({ isDarkText = false, title }: IProps) => {
  const color = isDarkText ? colors.text.secondary : colors.text.light;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.header}>
      {title && (
        <Typography
          text={title}
          style={[styles.title, { color }]}
          size={SizeType.Large}
        />
      )}
      <View style={styles.backIconWrapper}>
        <TouchableOpacity
          testID="back-icon"
          onPress={handleGoBack}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          <BackIcon
            style={styles.backIcon}
            color={isDarkText ? colors.text.secondary : undefined}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Header);
