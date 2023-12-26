import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Boot from './src/routes/Boot';
import {StatusBar} from 'react-native';
import {removeItemFromKeychain} from './src/utils/keychain';
import {LOGIN_SESSION_KEYCHAIN_KEY} from './src/utils/constants';

const App = () => {
  // removeItemFromKeychain(LOGIN_SESSION_KEYCHAIN_KEY);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          translucent
          animated
          barStyle="dark-content"
        />
        <Boot />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
