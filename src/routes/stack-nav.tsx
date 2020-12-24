import 'react-native-gesture-handler';

import React from 'react';
// import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import MyTabs from './tabs-nav';
import Home from '../screens/home/';

import Login from '../screens/auth/login';

function Private() {
  const PrivateStack = createStackNavigator();

  return (
    <NavigationContainer>
      <PrivateStack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="Home"
        headerMode="none">
        <PrivateStack.Screen name="MyTabs" component={MyTabs} />
        <PrivateStack.Screen name="Home" component={Home} />
        <PrivateStack.Screen name="Login" component={Login} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Private;
