import React from 'react';
import {Text, View} from 'react-native';
import styles from './ErrorScreenStyle';

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Something went wrong</Text>
    </View>
  );
};

export default ErrorScreen;
