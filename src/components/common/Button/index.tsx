import { memo } from 'react';
import { TouchableHighlight, View } from 'react-native';

// Themes
import { colors } from '@themes/index';

// Utils
import { getIcon } from '@utils/index';

// Types
import { FontWeight, IconName, TypoVariant } from '@interfaces/index';

// Components
import Typography from '../Typography';

// Styles
import styles from './styles';

interface IProps extends React.ComponentProps<typeof TouchableHighlight> {
  title: string;
  icon?: IconName;
  onPress: () => void;
}

const Button = ({
  onPress,
  icon,
  title,
  style,
  disabled,
  ...props
}: IProps) => {
  const Icon = icon && getIcon(icon);

  return (
    <TouchableHighlight
      style={[styles.container, disabled ? styles.disabledButton : null, style]}
      onPress={onPress}
      underlayColor={colors.background.light}
      disabled={disabled}
      {...props}
    >
      <View style={styles.contentWrapper}>
        {Icon && (
          <View style={styles.iconWrapper}>
            <Icon testID="Button-icon" />
          </View>
        )}
        <Typography
          text={title}
          variant={TypoVariant.Paragraph2}
          style={styles.baseTitle}
          key={title}
          fontWeight={FontWeight.SemiBold}
        />
      </View>
    </TouchableHighlight>
  );
};

export default memo(Button);
