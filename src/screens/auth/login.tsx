import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Animated,
  Easing,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {api} from '../../../env';
import {CustomView} from '../../hoc/CustomView';
import {colors, images, sizes} from '../../themes';
import {Button, Text, TextInput} from '../../components';
import {errorMessage} from '../../utils';
import {setAuth, setProfile} from '../../store/_actions/auth';
import {RFValue} from 'react-native-responsive-fontsize';

function App() {
  const dispatch = useDispatch(),
    errorAnimate = React.useRef(new Animated.Value(0)).current,
    loadingAnimate = React.useRef(new Animated.Value(0)).current;

  const errorAnimation = (toValue: number, duration: number) => {
    Animated.timing(errorAnimate, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  const loadingAnimation = (toValue: number, duration: number) => {
    Animated.timing(loadingAnimate, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const translateY = errorAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-40, 10],
  });

  const backgroundColor = errorAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.primary, colors.danger],
  });

  const translateX = loadingAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 5],
  });

  const authAction = async (value: any) => {
    // Fetching data check username
    if (value.email || value.password) {
      loadingAnimation(1, 200);
    } else {
      errorAnimation(1, 200);
    }
    const request: any = await api.get('users/');
    try {
      if (errorMessage.includes(request.problem)) {
        errorAnimation(1, 200);
      } else if (request.data.status !== 'error') {
        const {data} = request;
        for (let i = 0; i < data.length; i++) {
          if (
            (data[i].email.toLowerCase() === value.email ||
              data[i].id.toString() === value.email ||
              data[i].username.toLowerCase() === value.email) &&
            data[i].name.toLowerCase() === value.password
          ) {
            dispatch(
              setProfile({
                ...data[i],
                profile_photo: `https://avatars2.githubusercontent.com/u/${
                  data[i].address.suite[data[i].address.suite.length - 3]
                }?s=360`,
              }),
            );
            dispatch(setAuth('token'));
            break;
          }
        }
      }
    } catch (err) {
      errorAnimation(1, 200);
    } finally {
      loadingAnimation(0, 200);
      setTimeout(() => {
        errorAnimation(0, 200);
      }, 3000);
    }
  };

  const Form = React.memo(() => {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values: any) => authAction(values)}>
        {({values, handleChange, handleSubmit}: any) => (
          <View style={styles.contentContainer}>
            <Text type="bold" color={colors.primary} size={14}>
              Sign in
            </Text>
            <Text type="regular" color={colors.primary} style={styles.subtitle}>
              Alami sign in with username / email
            </Text>
            <TextInput
              placeholder="Username / Email"
              values={values.email}
              handle={handleChange('email')}
              containerStyle={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              isPassword
              values={values.password}
              handle={handleChange('password')}
              containerStyle={styles.textInput}
            />
            <Animated.View
              style={{opacity: errorAnimate, transform: [{translateY}]}}>
              <Text
                type="semibold"
                style={styles.textError}
                color={colors.danger}>
                An account matching that username and password was not found
              </Text>
            </Animated.View>

            <Button
              type="primary"
              onPress={handleSubmit}
              style={[
                styles.button,
                {
                  transform: [{translateY}],
                  backgroundColor: backgroundColor,
                },
              ]}>
              <Animated.View style={{opacity: loadingAnimate}}>
                <ActivityIndicator color={colors.white} />
              </Animated.View>
              <Animated.Text
                style={[styles.textButton, {transform: [{translateX}]}]}>
                Sign in
              </Animated.Text>
            </Button>
          </View>
        )}
      </Formik>
    );
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        resizeMode="contain"
        source={images.logo}
      />
      <Image
        style={styles.imageBackground}
        resizeMode="repeat"
        source={images.pattern}
      />
      <Form />
    </View>
  );
}

const MemoizedComponent = React.memo(App);

const ScreenLogin = CustomView(MemoizedComponent, {withHeader: false});

export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary2,
  },
  contentContainer: {
    position: 'absolute',
    padding: 20,
    height: heightPercentageToDP(90),
    backgroundColor: 'white',
    bottom: 0,
    borderRadius: sizes.radiusMedium,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: colors.primary2,
    position: 'absolute',
    top: 0,
  },
  containerForm: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: sizes.radiusLarge,
    borderTopRightRadius: sizes.radiusLarge,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
  },
  containerFirst: {
    alignSelf: 'center',
    width: widthPercentageToDP(60),
  },
  button: {
    marginTop: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  textInput: {
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 20,
  },
  imageLogo: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    tintColor: 'white',
    zIndex: 100,
    marginTop: heightPercentageToDP(6),
  },
  textError: {
    textAlign: 'center',
  },
  textButton: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(7, widthPercentageToDP(100)),
  },
});
