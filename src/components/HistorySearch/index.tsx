import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

// Components
import { Typography } from '@components/common';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

const HistorySearch = () => {
  // Stores
  const searchHistory = useStore.use.searchHistory();
  const resetSearchHistory = useStore.use.resetSearchHistory();
  const setCurrentSearchItem = useStore.use.setCurrentSearchItem();

  const handleSelectSearchHistory = useCallback((item: string) => {
    setCurrentSearchItem(item);
  }, []);

  const handleClearSearchHistory = useCallback(() => {
    resetSearchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Typography
          text="Search History"
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        />

        <Typography
          text="clear"
          size={SizeType.Small}
          style={styles.clear}
          onPress={handleClearSearchHistory}
        />
      </View>
      <View style={styles.itemWrapper}>
        {searchHistory.map((item, index) => (
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            onPress={() => handleSelectSearchHistory(item)}
            key={`${item}-${index}`}
          >
            <Typography text={item} style={styles.item} size={SizeType.Xs} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HistorySearch;
