import { View } from 'react-native';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Components
import { Typography } from '@components/common';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

interface IProps {
  price: number;
  name: string;
  productUnitId: number;
  description: string;
}

const ProductContent = ({
  price,
  name,
  productUnitId,
  description,
}: IProps) => {
  // Stores
  const getProductUnitNameById = useStore.use.getProductUnitNameById();

  return (
    <>
      <View style={styles.header}>
        <Typography
          text={`$${price}`}
          style={styles.price}
          fontWeight={FontWeight.SemiBold}
        />
        <Typography
          text={name}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
          variant={TypoVariant.Paragraph2}
        />
        <Typography
          text={getProductUnitNameById(productUnitId)}
          size={SizeType.Small}
          fontWeight={FontWeight.Medium}
        />
      </View>

      <Typography
        text={description}
        size={SizeType.Small}
        style={styles.description}
        numberOfLines={6}
      />
    </>
  );
};

export default ProductContent;
