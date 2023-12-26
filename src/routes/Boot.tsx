import React, {useState} from 'react';
import {SplashScreen} from '../screens';
import RootNavigator from './RootNavigator';

const Boot = () => {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);

  if (showSplashScreen) {
    return <SplashScreen setShowSplashScreen={setShowSplashScreen} />;
  }

  return <RootNavigator />;
};

export default Boot;
