import React from 'react';
import {View, StyleSheet, Image, Animated, StatusBar} from 'react-native';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {colors, images} from '../../themes';
import {setSplash} from '../../store/_actions/apps';
import {useFocusEffect} from '@react-navigation/native';

function SplashScreen({dispatch}: any) {
  const mountedAnimation = React.useRef(new Animated.Value(0)).current;
  useFocusEffect(() => {
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  });

  const animation = React.useCallback(
    (toValue: number, duration: number) => {
      Animated.timing(mountedAnimation, {
        toValue,
        duration,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          dispatch(setSplash());
        }, 1500);
      });
    },
    [dispatch, mountedAnimation],
  );

  React.useEffect(() => animation(1, 500), [animation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.containerImage, {opacity: mountedAnimation}]}>
        <Image source={images.logo} style={styles.logo} />
      </Animated.View>
    </View>
  );
}

export default connect()(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    width: widthPercentageToDP(60),
    resizeMode: 'contain',
    marginRight: 10,
  },
  containerImage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
