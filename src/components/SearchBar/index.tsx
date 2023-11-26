import { useCallback, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Input } from '@components/common';

// Hooks

// Icons
import { IconName, RootStackParamList } from '@interfaces/index';

// Themes
import { colors } from '@themes/index';

// Constants
import { ScreenNames } from '@constants/navigation';

// Stores
import useStore from '@stores/useStore';

interface IProps {
  currentSearchValue?: string;
}

const SearchBar = ({ currentSearchValue = '' }: IProps) => {
  // Stores
  const addSearchItem = useStore.use.addSearchItem();
  const setCurrentSearchItem = useStore.use.setCurrentSearchItem();

  const [searchValue, setSearchValue] = useState(currentSearchValue);

  const route = useRoute<RouteProp<RootStackParamList>>();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.HomeStack>
    >();

  useEffect(() => {
    if (currentSearchValue) {
      setSearchValue(currentSearchValue);
    }
  }, [currentSearchValue]);

  const handleSearch = useCallback(
    (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      const value = event.nativeEvent.text;
      if (value) {
        // Only add to history if value is not empty
        addSearchItem(value);
      }

      setCurrentSearchItem(value);

      if (route.name !== ScreenNames.search) {
        // Navigate from home screen
        navigation.navigate(ScreenNames.search);
      }
    },
    [],
  );

  const handleSearchTextChange = useCallback((text: string) => {
    setSearchValue(text);

    if (!text) {
      setCurrentSearchItem('');
    }
  }, []);

  return (
    <Input
      icon={IconName.Search}
      placeholder="Search keywords.."
      value={searchValue}
      containerStyles={{ backgroundColor: colors.background.dark }}
      onSubmitEditing={handleSearch}
      onChangeText={handleSearchTextChange}
    />
  );
};

export default SearchBar;
