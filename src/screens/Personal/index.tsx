import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Typography } from '@components/common';
import { Header } from '@components/index';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Constants
import { ALERT } from '@constants/messages';

// Styles
import styles from './styles';

const Personal = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header isDarkText />
    <View style={styles.container}>
      <Typography
        text="Personal screen"
        variant={TypoVariant.Paragraph2}
        size={SizeType.Xxl}
        fontWeight={FontWeight.Bold}
      />
      <Typography text={ALERT.COMING_SOON} />
    </View>
  </SafeAreaView>
);

export default Personal;
