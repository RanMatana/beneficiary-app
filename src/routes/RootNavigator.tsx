import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {checkLogin} from '../api';
import {ErrorScreen, HomeScreen, LoginScreen} from '../screens';
import colors from '../styles/colors';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  ErrorScreen: {
    text: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      try {
        const user = await checkLogin();
        setIsLogin(user ? true : false);
      } catch (error) {
        setIsLogin(false);
      }
    };

    getUser();
  }, []);

  if (isLogin === null) {
    return null;
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        headerTitleStyle: {color: colors.white},
        headerBackTitle: 'Back',
        headerTintColor: colors.white,
      }}
      initialRouteName={isLogin ? 'HomeScreen' : 'LoginScreen'}>
      <RootStack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{headerTitle: 'Login'}}
      />
      <RootStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          headerTitle: 'Loading your account...',
        }}
      />
      <RootStack.Screen
        name={'ErrorScreen'}
        component={ErrorScreen}
        options={{headerTitle: 'Error'}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
