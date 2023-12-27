import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/layout';

type Props = {
  isShown: SharedValue<number>;
  buttonProps?: TouchableOpacityProps;
  children: ReactNode;
} & ViewProps;

const CustomModal = ({
  isShown,
  buttonProps = {},
  children,
  ...props
}: Props) => {
  const rStyle = useAnimatedStyle(() => {
    const display = isShown.value === 0 ? 'none' : 'flex';
    const opacity = interpolate(isShown.value, [0.1, 1], [0, 1]);
    return {
      display,
      opacity,
    };
  });
  return (
    <Animated.View {...props} style={[rStyle, styles.root, props.style]}>
      <TouchableOpacity
        activeOpacity={1}
        {...buttonProps}
        onPress={() => (isShown.value = withTiming(0))}
        style={[styles.overlay, buttonProps.style]}
        accessible={false}>
        <TouchableOpacity activeOpacity={1} accessible={false}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
    elevation: 10,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  overlay: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomModal;
