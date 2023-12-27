import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomTextInput} from '.';
import colors from '../styles/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/layout';

type TransferPopupProps = {
  closePopup: () => void;
  balance: string | undefined;
};

const TransferPopup = ({closePopup, balance}: TransferPopupProps) => {
  const [amount, setAmount] = useState<string>('');

  const disabled =
    amount && balance && parseInt(amount, 10) <= parseInt(balance, 10)
      ? true
      : false;

  return (
    <View style={styles.container}>
      <CustomButton title="X" onPress={closePopup} style={styles.btn_x} />
      <Text style={styles.title}>Choose an amount</Text>
      <CustomTextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount to transfer"
      />
      <CustomButton title="Transfer" onPress={closePopup} disabled={disabled} />
    </View>
  );
};

export default TransferPopup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: SCREEN_HEIGHT / 3,
    width: SCREEN_WIDTH / 1.2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_x: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  text: {fontSize: 18, color: colors.white, fontWeight: '500'},
});
