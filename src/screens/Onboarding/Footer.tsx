import { useCallback, memo } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Constants
import { ScreenNames } from '@constants/index';

// Types
import { OnboardingStackParamList } from '@interfaces/index';

// Models
import { Slide } from '@models/index';

// Components
import { Button } from '@components/common';

// Themes
import { colors } from '@themes/index';

// Utils
import { areEqual } from '@utils/index';

// Styles
import styles from './styles';

interface IProps {
  slides: Slide[];
  activeSlideIndex: number;
}

const Footer = ({ slides, activeSlideIndex }: IProps) => {
  const { width } = useWindowDimensions();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        OnboardingStackParamList,
        ScreenNames.Onboarding
      >
    >();

  const handleNext = useCallback((): void => {
    navigation.navigate(ScreenNames.FirstTimeLogin);
  }, [navigation]);

  return (
    <View style={[styles.footerContainer, { width: width }]}>
      <View style={styles.indicatorContainer}>
        {slides.map((slide, index) => (
          <View
            style={[
              styles.indicator,
              {
                backgroundColor:
                  index === activeSlideIndex
                    ? colors.primary.main
                    : colors.background.dark,
              },
            ]}
            key={slide.title}
          />
        ))}
      </View>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default memo(Footer, areEqual);
