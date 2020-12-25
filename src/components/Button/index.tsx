import React from 'react';
import {
  Animated,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform,
  ColorValue,
} from 'react-native';
import Text from '../Text';

import styles from './styles';

type PropsButton = {
  title?: String;
  type?: 'primary' | 'danger' | 'light' | 'success';
  onPress?: () => void;
  style?: Object;
  children?: any;
  withOutRipple?: boolean;
  withOutAnimate?: boolean;
  disable?: boolean;
  rippleColor?: ColorValue;
};

const Button: React.FC<PropsButton> = ({
  type,
  style,
  title,
  onPress,
  children,
  withOutRipple = false,
  withOutAnimate = false,
  disable = false,
  rippleColor,
}) => {
  const [state] = React.useState({
    animated: new Animated.Value(1),
  });

  const inAnimate = (): void => {
    Animated.spring(state.animated, {
      toValue: 1.03,
      useNativeDriver: true,
    }).start();
  };

  const outAnimate = (): void => {
    Animated.spring(state.animated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle: Object = {
    transform: [{scale: state.animated}],
  };

  const types: any = [
    type === 'danger' && styles.dark,
    type === 'primary' && styles.primary,
    type === 'light' && styles.light,
    type === 'success' && styles.success,
  ];

  const textStyles: any = [
    type === 'danger' && styles.textDark,
    type === 'primary' && styles.textPrimary,
    type === 'light' && styles.textLight,
    type === 'success' && styles.textDark,
  ];

  const Touchable: any =
    Platform.OS !== 'ios'
      ? withOutRipple
        ? TouchableOpacity
        : TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View>
      {disable ? (
        <View>
          {withOutAnimate ? (
            <View style={[types, style]}>
              {children ? (
                children
              ) : (
                <Text type="bold" style={textStyles}>
                  {title}
                </Text>
              )}
            </View>
          ) : (
            <Animated.View style={[animatedStyle, types, style]}>
              {children ? (
                children
              ) : (
                <Text type="bold" style={textStyles}>
                  {title}
                </Text>
              )}
            </Animated.View>
          )}
        </View>
      ) : (
        <Touchable
          activeOpacity={0.99}
          delayPressIn={0}
          useForeground={true}
          onPressIn={inAnimate}
          onPressOut={outAnimate}
          background={TouchableNativeFeedback.Ripple(
            rippleColor ? rippleColor : '#FFFFFF20',
            true,
          )}
          onPress={onPress}>
          {withOutAnimate ? (
            <Animated.View style={[types, style]}>
              {children ? (
                children
              ) : (
                <Text type="bold" style={textStyles}>
                  {title}
                </Text>
              )}
            </Animated.View>
          ) : (
            <Animated.View
              // eslint-disable-next-line react-native/no-inline-styles
              style={[{overflow: 'hidden'}, animatedStyle, types, style]}>
              {children ? (
                children
              ) : (
                <Text type="bold" style={textStyles}>
                  {title}
                </Text>
              )}
            </Animated.View>
          )}
        </Touchable>
      )}
    </View>
  );
};

export default Button;
