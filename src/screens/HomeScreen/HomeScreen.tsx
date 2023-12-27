import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {logoutUser} from '../../api';
import {RootStackParamList} from '../../routes/RootNavigator';
import colors from '../../styles/colors';
import {
  BENEFICIARY_FS,
  END_POINT_BENEFICIARY,
  END_POINT_USER,
  LOGIN_SESSION_KEYCHAIN_KEY,
  USER_FS,
} from '../../utils/constants';
import {deleteJson, readJson, writeJson} from '../../utils/fs';
import {removeItemFromKeychain} from '../../utils/keychain';
import logger from '../../utils/logger';
import styles from './HomeScreenStyle';

type IUserData = {
  acount: string;
  balance: string;
  username: string;
};

type IContactsData = {
  contacts: ContactType[];
};

type ContactType = {
  name: string;
  acount: string;
};

type FlatListItem = {
  item: ContactType;
  index: number;
};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [user, setUser] = useState<IUserData>();
  const [beneficiaries, setBeneficiaries] = useState<IContactsData>({
    contacts: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userDataJson = (await readJson(USER_FS)) as IUserData;
      if (userDataJson) {
        navigation.setOptions({
          headerTitle: `Account number: ${userDataJson.acount}`,
        });
        setUser(userDataJson);
      }
      const response = await fetch(END_POINT_USER);
      if (response) {
        const dataUserResponse = (await response.json()) as IUserData;
        navigation.setOptions({
          headerTitle: `Account number: ${dataUserResponse.acount}`,
        });
        await writeJson(USER_FS, dataUserResponse);
        setUser(dataUserResponse);
      }
    };
    const fetchBeneficiary = async () => {
      const beneficiaryDataJson = (await readJson(
        BENEFICIARY_FS,
      )) as IContactsData;
      if (beneficiaryDataJson) {
        setBeneficiaries(beneficiaryDataJson);
      }
      setTimeout(async () => {
        const response = await fetch(END_POINT_BENEFICIARY);
        if (response) {
          const dataBeneficiaryResponse =
            (await response.json()) as IContactsData;
          await writeJson(BENEFICIARY_FS, dataBeneficiaryResponse);
          setBeneficiaries(dataBeneficiaryResponse);
        }
        setIsLoading(false);
      }, 2000);
    };
    fetchUser();
    fetchBeneficiary();
  }, []);

  const renderItem = ({item, index}: FlatListItem) => {
    const lastItem = index === beneficiaries?.contacts?.length - 1;
    return (
      <>
        <View key={index} style={styles.row}>
          <Text style={{color: colors.black}}>{item.name}</Text>
          <Text style={{color: colors.black}}>{item.acount}</Text>
          <TouchableOpacity style={styles.btn_row}>
            <Text style={styles.text_transfer}>Transfer</Text>
          </TouchableOpacity>
        </View>
        {lastItem && <View style={styles.space} />}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Text
          onPress={async () => {
            await logoutUser();
            await removeItemFromKeychain(LOGIN_SESSION_KEYCHAIN_KEY);
            await deleteJson(BENEFICIARY_FS);
            await deleteJson(USER_FS);
            navigation.replace('LoginScreen');
          }}
          style={styles.text_disconnect}>
          Disconnect
        </Text>
        <Text
          onPress={() => {
            logger('Should add beneficiary');
          }}
          style={styles.text_beneficiary}>
          + Add Beneficiary
        </Text>
        <Text
          onPress={async () => {
            await logoutUser();
            await removeItemFromKeychain(LOGIN_SESSION_KEYCHAIN_KEY);
            await deleteJson(BENEFICIARY_FS);
            await deleteJson(USER_FS);
            navigation.replace('LoginScreen');
          }}
          style={styles.text_disconnect}>
          Disconnect
        </Text>
        <Text style={styles.title}>Hello, {user?.username}</Text>
        <Text style={styles.text_balance}>Balance: {user?.balance}</Text>
      </View>
      {isLoading && <ActivityIndicator size="large" style={{paddingTop: 20}} />}
      <FlatList
        data={beneficiaries.contacts}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled
      />
    </View>
  );
};

export default HomeScreen;
