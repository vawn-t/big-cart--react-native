import { useCallback, useEffect } from 'react';
import { Alert, View } from 'react-native';

// Components
import { LoadingIndicator, Typography } from '@components/common';
import { RightArrow } from '@components/Icon';
import HorizontalCards from '@components/Cards/HorizontalCards';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Constants
import { ALERT } from '@constants/index';

// Hooks
import useProductList from '@hooks/useProduct/useProductList';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

const FeaturedProducts = () => {
  const { data, isSuccess, isPending } = useProductList();

  // Stores
  const setProducts = useStore.use.setProducts();
  const products = useStore.use.products();

  useEffect(() => {
    if (isSuccess) {
      setProducts(data);
    }
  }, [isSuccess]);

  const handleAlertMessage = useCallback(() => {
    Alert.alert(ALERT.COMING_SOON);
  }, []);

  return (
    <>
      <View style={styles.titleWrapper}>
        <Typography
          text="Featured Products"
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        />
        <RightArrow onPress={handleAlertMessage} />
      </View>
      {isPending ? (
        <LoadingIndicator />
      ) : (
        <HorizontalCards products={products} />
      )}
    </>
  );
};

export default FeaturedProducts;
