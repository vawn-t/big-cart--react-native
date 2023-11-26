import { memo } from 'react';
import { View } from 'react-native';

// Components
import HorizontalCards from '@components/Cards/HorizontalCards';
import { Typography } from '@components/common';

// Models
import { Product } from '@models/index';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/typography';

// Utils
import { areEqual } from '@utils/index';

// Styles
import styles from './styles';

interface IProps {
  results: Product[];
}
const SearchResult = ({ results }: IProps) => (
  <View>
    <Typography
      text="Results"
      fontWeight={FontWeight.SemiBold}
      size={SizeType.Large}
      variant={TypoVariant.Paragraph2}
    />

    {results.length ? (
      <HorizontalCards products={results} />
    ) : (
      <View style={styles.notFoundWrapper}>
        <Typography
          text="The products are not available!"
          variant={TypoVariant.Paragraph2}
          fontWeight={FontWeight.SemiBold}
        />
      </View>
    )}
  </View>
);

export default memo(SearchResult, areEqual);
