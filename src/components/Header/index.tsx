/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Animated,
  View,
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../themes/';
import styles from './styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';

type PropsHeader = {
  backAction?: boolean;
  title?: string | any;
  titleColor?: string;
  onPress?: () => void;
  useBackAction?: Function;
  isHome?: boolean;
  style?: Object;
};

const Header: React.FC<PropsHeader> = ({
  backAction,
  title,
  titleColor,
  isHome,
  useBackAction,
  style,
}) => {
  const Touchable: any =
      Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback,
    colorOpacity: string = colors.like + '50',
    {goBack} = useNavigation();

  const handleBAack = () => {
    goBack();
  };

  return (
    <Animated.View style={[styles.default, style]}>
      {backAction && (
        <Touchable
          delayPressIn={0}
          delayPressOut={0}
          onPress={useBackAction ? useBackAction : handleBAack}
          underlayColor={colorOpacity}
          background={TouchableNativeFeedback.Ripple('', true)}
          style={Platform.OS === 'ios' && styles.backButton}>
          <View style={Platform.OS !== 'ios' && styles.backButton}>
            <Icon
              name="arrow-left"
              color={titleColor}
              size={heightPercentageToDP(3)}
            />
          </View>
        </Touchable>
      )}
      <Animated.Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          styles.textHeader,
          backAction || isHome ? null : {paddingLeft: 20},
          {
            color: titleColor,
          },
        ]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;
