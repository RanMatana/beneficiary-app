import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import colors from '../styles/colors';

interface CustomTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  ...restProps
}: CustomTextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      style={[styles.input, style]}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default CustomTextInput;
