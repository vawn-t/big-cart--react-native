import { useCallback, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';

// Components
import { Typography, LoadingIndicator } from '@components/common';
import CategoryItem from './CategoryItem';
import { RightArrow } from '@components/Icon';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Constants
import { ALERT } from '@constants/index';

// Hooks
import useCategoryList from '@hooks/useCategory/useCategoryList';

// Stores
import useStore from '@stores/useStore';

// Styles
import styles from './styles';

const Categories = () => {
  const { data, isPending, isSuccess } = useCategoryList();

  // Stores
  const categories = useStore.use.categories();
  const setCategories = useStore.use.setCategories();

  useEffect(() => {
    if (isSuccess) {
      setCategories(data.categories);
    }
  }, [isSuccess, data]);

  const handleAlertMessage = useCallback(() => {
    Alert.alert(ALERT.COMING_SOON);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Typography
          text="Categories"
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        />
        <RightArrow onPress={handleAlertMessage} />
      </View>

      <View style={styles.categories}>
        {isPending && !categories.length ? (
          <LoadingIndicator />
        ) : (
          <ScrollView
            horizontal
            contentContainerStyle={styles.categories}
            showsHorizontalScrollIndicator={false}
          >
            {(categories || []).map((item) => (
              <CategoryItem
                item={item}
                key={item.id}
                onPressItem={handleAlertMessage}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Categories;
