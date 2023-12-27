import React from 'react';
import {Text, View} from 'react-native';
import styles from './ErrorScreenStyle';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/RootNavigator';

const ErrorScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'ErrorScreen'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{params.text}</Text>
    </View>
  );
};

export default ErrorScreen;
