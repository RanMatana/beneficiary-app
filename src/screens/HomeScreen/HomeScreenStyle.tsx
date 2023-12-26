import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container_title: {
    height: '40%',
    width: '100%',
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_disconnect: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: colors.white,
    fontSize: 14,
  },
  text_beneficiary: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: colors.white,
    fontSize: 14,
  },
  title: {
    color: colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  text_balance: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
