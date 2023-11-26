import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-root-toast';

// Components
import {
  Banners,
  Categories,
  FeaturedProducts,
  SearchBar,
} from '@components/index';

// Themes
import { colors } from '@themes/index';

// Stores
import useStore from '@stores/useStore';

// Hooks
import useProductUnitList from '@hooks/useProductUnit/useProductUnitList';
import useCartItemList from '@hooks/useCart/useCartItemList';

// Styles
import styles from './styles';

const Home = () => {
  const { data: productUnits, error: productUnitListError } =
    useProductUnitList();
  const { data: cartItemList, error: cartItemListError } = useCartItemList();

  // Stores
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();
  const setProductUnits = useStore.use.setProductUnits();
  const setCartItems = useStore.use.setCartItems();

  useEffect(() => {
    const isProductUnitListPending = !productUnits;
    const isCartItemListPending = !cartItemList;

    if (isProductUnitListPending || isCartItemListPending) {
      enableLoading();
      return;
    } else {
      disableLoading();
    }

    let errors = [productUnitListError, cartItemListError];

    // Filter out errors
    errors = errors.filter((error) => error instanceof Error);

    if (!isProductUnitListPending && !isCartItemListPending) {
      setProductUnits(productUnits);
      setCartItems(cartItemList);
    } else if (errors?.length) {
      Toast.show(errors[0]!.message);
    }
  }, [productUnits, cartItemList, productUnitListError]);

  return (
    <LinearGradient
      colors={[colors.background.primary, colors.background.dark]}
    >
      <SafeAreaView edges={['right', 'left', 'top']}>
        <ScrollView
          contentContainerStyle={styles.container}
          nestedScrollEnabled
        >
          <SearchBar />
          <Banners />
          <Categories />
          <FeaturedProducts />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
