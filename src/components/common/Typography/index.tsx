import { memo } from 'react';
import { Text } from 'react-native';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Styles
import styles from './styles';

interface IProps extends React.ComponentProps<typeof Text> {
  size?: SizeType;
  text: string | number;
  variant?: TypoVariant;
  fontWeight?: FontWeight;
}

const Typography = ({
  text,
  size = SizeType.Default,
  variant = TypoVariant.Paragraph1,
  fontWeight = FontWeight.Regular,
  ...props
}: IProps) => {
  const { style, ...rest } = props;

  return (
    <Text
      style={[styles[variant], styles[fontWeight], { fontSize: size }, style]}
      {...rest}
    >
      {text}
    </Text>
  );
};

export default memo(Typography);
