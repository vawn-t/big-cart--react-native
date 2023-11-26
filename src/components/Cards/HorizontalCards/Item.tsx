import { useCallback, useState } from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import AddToCartButton from './AddToCartButton';
import { Typography } from '@components/common';
import { HeartFillIcon, HeartIcon } from '@components/Icon';

// Types
import {
  SizeType,
  TypoVariant,
  RootStackParamList,
  FontWeight,
} from '@interfaces/index';

// Constants
import { ScreenNames } from '@constants/navigation';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

interface IProp {
  id: number;
  name: string;
  productUnitId: number;
  image: string;
  price: number;
}

const Item = ({ id, name, productUnitId, image, price }: IProp) => {
  const [favorite, setFavorite] = useState(false);

  const handleToggleFavorite = useCallback(() => {
    setFavorite((prev) => !prev);
  }, []);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.HomeStack>
    >();

  // Stores
  const getProductUnitNameById = useStore.use.getProductUnitNameById();

  const handleNavigateToProductDetail = () => {
    navigation.navigate(ScreenNames.ProductDetail, { id });
  };

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.top}>
        <TouchableWithoutFeedback onPress={handleNavigateToProductDetail}>
          <View style={styles.content}>
            <View style={styles.circle} />
            <Image source={{ uri: image }} style={styles.image} />
            <Typography
              text={`$${price}`}
              size={SizeType.Small}
              style={styles.price}
              fontWeight={FontWeight.Medium}
            />
            <Typography
              text={name}
              variant={TypoVariant.Paragraph2}
              style={styles.name}
              fontWeight={FontWeight.SemiBold}
            />
            <Typography
              text={getProductUnitNameById(productUnitId)}
              size={SizeType.Small}
              style={styles.amount}
              fontWeight={FontWeight.Medium}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.bottom}>
        <AddToCartButton productId={id} />
      </View>

      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={handleToggleFavorite}
      >
        {!favorite ? <HeartIcon /> : <HeartFillIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Item;
