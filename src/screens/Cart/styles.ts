import { StyleSheet } from 'react-native';
import { colors } from '@themes/index';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
  container: {
    flex: 1,
  },

  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
  },
});

export default styles;
