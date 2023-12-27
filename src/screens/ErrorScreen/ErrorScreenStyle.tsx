import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    paddingBottom: 40,
  },
});
