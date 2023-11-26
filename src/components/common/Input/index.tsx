import { useCallback, useState, memo, forwardRef, LegacyRef } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

// Icons
import { EyeIcon, EyeSlashIcon } from '@components/Icon';

// Types
import { IconName } from '@interfaces/index';

// Utils
import { getIcon } from '@utils/index';

// Styles
import styles from './styles';

interface IProps extends React.ComponentProps<typeof TextInput> {
  placeholder: string;
  icon: IconName;
  autoComplete?: 'email' | 'password' | 'off';
  containerStyles?: { [name: string]: number | string };
  isError?: boolean;
}

const Input = forwardRef(
  (
    {
      placeholder,
      autoComplete = 'off',
      containerStyles,
      icon,
      isError = false,
      style,
      ...props
    }: IProps,
    ref: LegacyRef<TextInput>,
  ) => {
    const [isSecured, setIsSecured] = useState(icon === IconName.Password);

    const IconComponent = getIcon(icon);

    const handleEyeToggle = useCallback(() => {
      setIsSecured((prev) => !prev);
    }, []);

    return (
      <View
        style={[
          styles.container,
          containerStyles,
          isError ? styles.error : null,
        ]}
        testID="Input"
      >
        <View style={styles.iconWrapper}>
          {IconComponent && <IconComponent />}
        </View>
        <TextInput
          ref={ref}
          testID="Input-TextInput"
          autoComplete={autoComplete}
          placeholder={placeholder}
          secureTextEntry={isSecured}
          style={[styles.baseInput, style]}
          {...props}
        />

        <TouchableOpacity onPress={handleEyeToggle} style={styles.iconWrapper}>
          {icon === IconName.Password && (
            <>
              {isSecured && <EyeIcon />}
              {!isSecured && <EyeSlashIcon />}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  },
);

Input.displayName = 'Input';

export default memo(Input);
