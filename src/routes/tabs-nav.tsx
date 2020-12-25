import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import {Text} from '../components/';

import Home from '../screens/home/';
import Profile from '../screens/profile/';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../themes';

const Tab = createMaterialTopTabNavigator();

const options = {
  indicatorStyle: {
    height: widthPercentageToDP(0),
    opacity: 0,
  },
  style: {
    height: heightPercentageToDP(6),
    backgroundColor: 'white',
  },
  showLabel: false,
  showIcon: true,
};

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={options}
      backBehavior="initialRoute"
      swipeEnabled={false}
      tabBarPosition="bottom">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.box}>
              <Icon
                style={styles.icon}
                name="home"
                size={heightPercentageToDP(3.5)}
                color={focused ? colors.warning : colors.primary}
              />
              <Text
                size={5.5}
                type="regular"
                color={focused ? colors.warning : colors.primary}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.box}>
              <Icon
                style={styles.icon}
                name="user"
                size={heightPercentageToDP(3.5)}
                color={focused ? colors.warning : colors.primary}
              />
              <Text
                size={5.5}
                type="regular"
                color={focused ? colors.warning : colors.primary}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: heightPercentageToDP(5),
    width: heightPercentageToDP(7),
    paddingBottom: heightPercentageToDP(2),
  },
  icon: {
    height: heightPercentageToDP(3.5),
    width: heightPercentageToDP(3.5),
  },
});
