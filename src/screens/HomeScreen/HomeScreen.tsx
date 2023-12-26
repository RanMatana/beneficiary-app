import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../routes/RootNavigator';
import {END_POINT_USER, USER_FS} from '../../utils/constants';
import styles from './HomeScreenStyle';
import {readJson, writeJson} from '../../utils/fs';

type IUserData = {
  acount: string;
  balance: string;
  username: string;
};

const HomeScreen = () => {
  const [user, setUser] = useState<IUserData>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(END_POINT_USER);
      if (response) {
        const data = (await response.json()) as IUserData;
        navigation.setOptions({headerTitle: `Account number: ${data.acount}`});
        await writeJson(USER_FS, data);
        setUser(data);
      }
    };
    const getUser = async () => {
      const data = (await readJson(USER_FS)) as IUserData;
      if (data) {
        navigation.setOptions({headerTitle: `Account number: ${data.acount}`});
        setUser(data);
      }
    };
    getUser();
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
