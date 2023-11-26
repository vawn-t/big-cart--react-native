import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Components
import { BackIcon } from '@components/Icon';
import { HistorySearch, SearchBar, SearchResult } from '@components/index';
import { LoadingIndicator } from '@components/common';

// Themes
import { colors } from '@themes/index';

// Types
import { RootStackParamList } from '@interfaces/index';

// Constants
import { ScreenNames } from '@constants/index';

// Stores
import useStore from '@stores/useStore';

// Hooks
import useProductSearch from '@hooks/useProduct/useProductSearch';

// Styles
import styles from './styles';

const Search = () => {
  // Stores
  const currentSearchValue = useStore.use.currentSearchValue();

  // Queries
  const {
    data: products,
    isSuccess,
    refetch,
  } = useProductSearch(currentSearchValue);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.search>
    >();

  useEffect(() => {
    if (currentSearchValue) {
      refetch();
    }
  }, [currentSearchValue]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackIcon color={colors.text.secondary} onPress={handleGoBack} />
        <SearchBar currentSearchValue={currentSearchValue} />
      </View>
      <View style={styles.resultArea}>
        {currentSearchValue === '' ? (
          <HistorySearch />
        ) : isSuccess ? (
          <SearchResult results={products} />
        ) : (
          <LoadingIndicator />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
