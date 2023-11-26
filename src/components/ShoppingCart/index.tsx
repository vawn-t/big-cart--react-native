import { memo, useCallback } from 'react';
import { Alert, View } from 'react-native';

// Components
import VerticalCards from '../Cards/VerticalCards';
import { Typography, Button } from '@components/common';

// Types
import { TypoVariant, SizeType, FontWeight } from '@interfaces/index';

// Utils
import { areEqual } from '@utils/index';

// Stores
import useStore from '@stores/useStore';

// Constants
import { ALERT } from '@constants/index';

// Styles
import styles from './styles';

interface IProps {
  cartItemIds: number[];
}

const ShoppingCart = ({ cartItemIds }: IProps) => {
  const totalCost = useStore.use.totalCost();

  const handleCheckout = useCallback(() => {
    Alert.alert(ALERT.COMING_SOON);
  }, []);

  return (
    <View style={styles.container}>
      <VerticalCards cartItemIds={cartItemIds} />
      <View style={styles.checkout}>
        <View style={styles.costItems}>
          <View style={styles.costItem}>
            <Typography
              text="Subtotal"
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
            />
            <Typography
              text={`$${totalCost}`}
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
            />
          </View>

          <View style={styles.costItem}>
            <Typography
              text="Shipping charges"
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
            />
            <Typography
              text="$0.00"
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
            />
          </View>
        </View>

        <View style={styles.costTotal}>
          <Typography
            text="Total"
            size={SizeType.Large}
            variant={TypoVariant.Paragraph2}
            fontWeight={FontWeight.SemiBold}
          />

          <Typography
            text={`$${totalCost}`}
            size={SizeType.Large}
            variant={TypoVariant.Paragraph2}
            fontWeight={FontWeight.SemiBold}
          />
        </View>
        <Button title="Checkout" onPress={handleCheckout} />
      </View>
    </View>
  );
};

export default memo(ShoppingCart, areEqual);
