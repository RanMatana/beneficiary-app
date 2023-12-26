import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {BounceInLeft} from 'react-native-reanimated';
import Logo from '../../../assets/logo.png';
import styles from './SplashScreenStyle';

interface SplashScreenProps {
  setShowSplashScreen: Dispatch<SetStateAction<boolean>>;
}

const SplashScreen = ({setShowSplashScreen}: SplashScreenProps) => {
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, [setShowSplashScreen]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Logo}
        style={styles.logo}
        entering={BounceInLeft.duration(1500)}
      />
    </View>
  );
};

export default SplashScreen;
