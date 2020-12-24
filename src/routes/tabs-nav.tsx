import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Login from '../screens/auth/login';

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const options = {
  labelStyle: {color: 'red'},
  showIcon: true,
};

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={options}
      swipeEnabled={false}
      tabBarPosition="bottom">
      <Tab.Screen name="Home" component={Login} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
