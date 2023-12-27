import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomTextInput} from '.';
import {useAppDispatch} from '../redux';
import {addBeneficiaries} from '../redux/features/BeneficiariesSlice';
import colors from '../styles/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/layout';

type NewBeneficiaryPopupProps = {
  closePopup: () => void;
};

const NewBeneficiaryPopup = ({closePopup}: NewBeneficiaryPopupProps) => {
  const [name, setName] = useState<string>('');
  const [account, setAccount] = useState<string>('');
  const dispatch = useAppDispatch();

  const disabled = name && account ? true : false;

  const exitPopup = () => {
    setName('');
    setAccount('');
    closePopup();
  };

  const onSubmit = () => {
    dispatch(addBeneficiaries({name, acount: account}));
    exitPopup();
  };

  return (
    <View style={styles.container}>
      <CustomButton title="X" onPress={exitPopup} style={styles.btn_x} />
      <Text style={styles.title}>Add a new Beneficiary</Text>
      <CustomTextInput value={name} onChangeText={setName} placeholder="name" />
      <CustomTextInput
        value={account}
        onChangeText={setAccount}
        placeholder="account"
      />
      <CustomButton title="Add" onPress={onSubmit} disabled={disabled} />
    </View>
  );
};

export default NewBeneficiaryPopup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: SCREEN_HEIGHT / 2.5,
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
