import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '.';
import colors from '../styles/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/layout';

type DisconnectPopupProps = {
  closePopup: () => void;
  handleDisconnect: () => Promise<void>;
};

const DisconnectPopup = ({
  closePopup,
  handleDisconnect,
}: DisconnectPopupProps) => {
  return (
    <View style={styles.container}>
      <CustomButton title="X" onPress={closePopup} style={styles.btn_x} />
      <Text style={styles.title}>Are you sure you wanna leave?</Text>
      <View style={styles.container_btn}>
        <CustomButton
          style={{width: '45%'}}
          title="Yes"
          onPress={handleDisconnect}
        />
        <CustomButton style={{width: '45%'}} title="No" onPress={closePopup} />
      </View>
    </View>
  );
};

export default DisconnectPopup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: SCREEN_HEIGHT / 4,
    width: SCREEN_WIDTH / 1.2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
    marginBottom: 50,
  },
  text: {fontSize: 18, color: colors.white, fontWeight: '500'},
});
