import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../styles/colors';

interface CustomButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  disabled?: boolean;
  title: string;
}

const CustomButton = ({
  onPress,
  disabled = true,
  title,
  style,
  ...restProps
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!disabled}
      style={[styles.btn, {opacity: !disabled ? 0.4 : 1}, style]}
      {...restProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CustomButton;
