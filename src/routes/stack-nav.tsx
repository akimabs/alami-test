import 'react-native-gesture-handler';

import React from 'react';
// import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SplashScreen from '../screens/auth/splash-screen';

import OnBoarding from '../screens/auth/onboarding';

import Login from '../screens/auth/login';

import MyTabs from './tabs-nav';
import Home from '../screens/home/';
import Posts from '../screens/posts/';
import SearchPost from '../screens/posts/search-post';

function Private() {
  const auth = useSelector((state: any) => state.auth);
  const apps = useSelector((state: any) => state.apps),
    {isDoneOnboarding, token} = auth;

  const SplashStack = createStackNavigator();
  const OnBoardingStack = createStackNavigator();
  const AuthStack = createStackNavigator();
  const PrivateStack = createStackNavigator();

  if (apps.isFirst) {
    return (
      <NavigationContainer>
        <SplashStack.Navigator
          initialRouteName="SplashScreen"
          headerMode="none">
          <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
        </SplashStack.Navigator>
      </NavigationContainer>
    );
  }

  if (!isDoneOnboarding) {
    return (
      <NavigationContainer>
        <OnBoardingStack.Navigator
          screenOptions={TransitionPresets.ModalSlideFromBottomIOS}
          initialRouteName="OnBoarding"
          headerMode="none">
          <OnBoardingStack.Screen name="OnBoarding" component={OnBoarding} />
        </OnBoardingStack.Navigator>
      </NavigationContainer>
    );
  }

  if (!token) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={TransitionPresets.ModalSlideFromBottomIOS}
          initialRouteName="Login"
          headerMode="none">
          <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <PrivateStack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="MyTabs"
        headerMode="none">
        <PrivateStack.Screen name="MyTabs" component={MyTabs} />
        <PrivateStack.Screen name="Home" component={Home} />
        <PrivateStack.Screen name="Posts" component={Posts} />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          name="SearchPost"
          component={SearchPost}
        />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Private;
