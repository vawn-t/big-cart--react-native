import { Image, TouchableWithoutFeedback, View } from 'react-native';

// Components
import { Typography } from '@components/common';

// Types
import { SizeType } from '@interfaces/index';

// Models
import { Category } from '@models/index';

// Styles
import styles from './styles';

interface IProps {
  item: Category;
  onPressItem: () => void;
}

const CategoryItem = ({ item: { name, image }, onPressItem }: IProps) => (
  <TouchableWithoutFeedback onPress={onPressItem} testID="CategoryItem">
    <View style={styles.itemContainer}>
      <View>
        <Image source={{ uri: image }} width={52} height={52} />
      </View>
      <Typography text={name} size={SizeType.Xs} />
    </View>
  </TouchableWithoutFeedback>
);

export default CategoryItem;
