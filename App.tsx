import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Boot from './src/routes/Boot';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            backgroundColor="transparent"
            translucent
            animated
            barStyle="dark-content"
          />
          <Boot />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
