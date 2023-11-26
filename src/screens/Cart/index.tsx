import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { EmptyCart, ShoppingCart } from '@components/index';
import Header from './Header';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

const Cart = () => {
  const cartItemIds = useStore.use.cartItemIds();

  return (
    <View style={styles.screenWrapper}>
      <SafeAreaView style={styles.container}>
        <Header />
        {cartItemIds.length ? (
          <ShoppingCart cartItemIds={cartItemIds} />
        ) : (
          <EmptyCart />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Cart;
