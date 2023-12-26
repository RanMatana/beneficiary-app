import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  card: {
    minHeight: '40%',
    width: '80%',
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.white,
    padding: 10,
    color: colors.white,
  },
  btn: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.white,
  },
  text: {fontSize: 18, color: colors.white, fontWeight: '500'},
});
