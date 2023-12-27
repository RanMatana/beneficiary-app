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
  input: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    color: colors.black,
    fontWeight: '400',
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
  text_header: {
    color: colors.black,
    textAlign: 'left',
    width: '80%',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
