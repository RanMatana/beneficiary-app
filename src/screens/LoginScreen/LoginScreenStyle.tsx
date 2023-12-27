import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  card: {
    minHeight: '45%',
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: colors.black,
    textAlign: 'left',
    width: '80%',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  text: {fontSize: 18, color: colors.white, fontWeight: '500'},
});
