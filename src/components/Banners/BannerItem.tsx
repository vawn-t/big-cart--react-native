import { ImageBackground } from 'react-native';

// Models
import { Slide } from '@models/index';

// Components
import { Typography } from '@components/common';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Styles
import styles from './styles';

interface IProps {
  item: Slide;
  width: number;
}

const BannerItem = ({ item, width }: IProps) => (
  <ImageBackground
    source={item.image}
    style={[styles.bannerContainer, { width }]}
    resizeMode="cover"
  >
    <Typography
      text={item.title}
      style={styles.text}
      size={SizeType.Large}
      variant={TypoVariant.Paragraph2}
      fontWeight={FontWeight.SemiBold}
    />
  </ImageBackground>
);

export default BannerItem;
