import { View } from 'react-native';

// Components
import { Header } from '@components/index';
import { Typography } from '@components/common';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/typography';

// Styles
import styles from './styles';

interface IProps {
  header: string;
  title: string;
  description: string;
  FormComponent: React.ComponentType;
}

const VerificationLayout = ({
  description,
  FormComponent,
  header,
  title,
}: IProps) => {
  return (
    <>
      <Header isDarkText title={header} />
      <View style={styles.main}>
        <View style={styles.content}>
          <Typography
            text={title}
            variant={TypoVariant.Paragraph2}
            size={SizeType.Xl}
            fontWeight={FontWeight.Medium}
          />

          <Typography text={description} style={styles.description} />
        </View>
        <View>
          <FormComponent />
        </View>
      </View>
    </>
  );
};

export default VerificationLayout;
