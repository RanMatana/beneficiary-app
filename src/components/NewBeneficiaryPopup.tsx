import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/layout';

type NewBeneficiaryPopupProps = {
  closePopup: () => void;
};

const NewBeneficiaryPopup = ({closePopup}: NewBeneficiaryPopupProps) => {
  return (
    <View style={styles.container}>
      <Text>shalom</Text>
    </View>
  );
};

export default NewBeneficiaryPopup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH / 1.2,
    borderRadius: 8,
  },
});
