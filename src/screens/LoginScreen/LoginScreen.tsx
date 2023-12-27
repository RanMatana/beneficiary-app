import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {loginUser} from '../../api';
import {CustomButton, CustomTextInput} from '../../components';
import {RootStackParamList} from '../../routes/RootNavigator';
import styles from './LoginScreenStyle';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const disabled = username && password ? true : false;

  const onSubmit = () => {
    loginUser({username, password}).then(() => {
      navigation.replace('HomeScreen');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.text, styles.text_header]}>Welcome back!</Text>
        <CustomTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="username"
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
        />
        <CustomButton title="Connect" onPress={onSubmit} disabled={disabled} />
      </View>
    </View>
  );
};

export default LoginScreen;
