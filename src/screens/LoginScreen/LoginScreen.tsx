import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {loginUser} from '../../api';
import {RootStackParamList} from '../../routes/RootNavigator';
import colors from '../../styles/colors';
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
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="username"
          style={styles.input}
          placeholderTextColor={colors.gray}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          style={styles.input}
          placeholderTextColor={colors.gray}
        />
        <TouchableOpacity
          onPress={onSubmit}
          hitSlop={10}
          disabled={!disabled}
          style={[styles.btn, {opacity: disabled ? 1 : 0.4}]}>
          <Text style={styles.text}>connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
