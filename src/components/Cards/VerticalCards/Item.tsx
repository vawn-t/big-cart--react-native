import { useCallback, useEffect } from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Components
import { AddIcon, MinusIcon } from '@components/Icon';
import { LoadingIndicator, Typography } from '@components/common';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Stores
import useStore from '@stores/useStore';

// Hooks
import useProductDetail from '@hooks/useProduct/useProductDetail';

// Styles
import styles from './styles';

interface IProps {
  cartItemId: number;
}

const Item = ({ cartItemId }: IProps) => {
  // Stores
  const getProductUnitNameById = useStore.use.getProductUnitNameById();
  const updateCartItemQuantity = useStore.use.updateCartItemQuantity();
  const updateCartItemPrice = useStore.use.updateCartItemPrice();
  const cartItemById = useStore.use.cartItemById();

  const cartItem = cartItemById[cartItemId];

  const { data: product, isSuccess } = useProductDetail(cartItem?.productId);

  useEffect(() => {
    if (isSuccess && product) {
      updateCartItemPrice(cartItem.id, product.price);
    }
  }, [isSuccess, cartItem?.id, product]);

  const handleDecrease = useCallback(() => {
    if (cartItem.quantity > 1) {
      updateCartItemQuantity(cartItem.id, cartItem.quantity - 1);
    }
  }, [cartItem]);

  const handleIncrease = useCallback(() => {
    updateCartItemQuantity(cartItem.id, cartItem.quantity + 1);
  }, [cartItem]);

  return (
    <TouchableWithoutFeedback testID="VerticalCard">
      {product ? (
        <View style={styles.itemContainer}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>

          <View style={styles.content}>
            <Typography
              text={`$${product.price}`}
              size={SizeType.Small}
              style={styles.price}
              fontWeight={FontWeight.Medium}
            />
            <Typography text={product.name} variant={TypoVariant.Paragraph2} />
            <Typography
              text={getProductUnitNameById(product.productUnitId)}
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
              variant={TypoVariant.Paragraph1}
            />
          </View>

          <View style={styles.quantityWrapper}>
            <TouchableOpacity
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              onPress={handleIncrease}
            >
              <View>
                <AddIcon />
              </View>
            </TouchableOpacity>
            <Typography
              text={cartItem.quantity}
              variant={TypoVariant.Paragraph2}
            />
            <TouchableOpacity
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              onPress={handleDecrease}
            >
              <View>
                <MinusIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <LoadingIndicator />
      )}
    </TouchableWithoutFeedback>
  );
};

export default Item;
