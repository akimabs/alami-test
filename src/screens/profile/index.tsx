import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import {persistor} from '../../store/store';
import RNRestart from 'react-native-restart';

import {Button, Text} from '../../components';
import {CustomView} from '../../hoc/CustomView';
import {images} from '../../themes';

import styles from './styles';

function App() {
  useFocusEffect(() => StatusBar.setBarStyle('dark-content'));
  const auth = useSelector((state: any) => state.auth);

  const Card = React.memo(() => (
    <View style={styles.imageCard}>
      <Image resizeMode="repeat" source={images.pattern} style={styles.image} />
      <View>
        <Text type="semibold" color="white" size={9}>
          Hello, {`${auth.profile.name}`}
        </Text>
        <Text type="regular" color="white" size={9}>
          {`${auth.profile.email}`}
        </Text>
        <Text type="regular" color="white" size={9}>
          {`${auth.profile.phone}`}
        </Text>
      </View>
      <Image
        source={{uri: auth.profile.profile_photo}}
        style={styles.imageProfile}
      />
    </View>
  ));

  const Biodata = React.memo(() => {
    const logout = () => {
      setTimeout(async () => {
        await persistor.purge();
        await AsyncStorage.clear();
        RNRestart.Restart();
      }, 500);
    };
    return (
      <View style={styles.containerBiodata}>
        <View style={styles.containerData}>
          <Text type="regular" style={styles.dataLeft}>
            Website
          </Text>
          <Text type="bold">{`${auth.profile.website}`}</Text>
        </View>
        <View style={styles.containerData}>
          <Text type="regular" style={styles.dataLeft}>
            Address
          </Text>
          <Text
            type="bold"
            style={
              styles.dataRight
            }>{`${auth.profile.address.street}, ${auth.profile.address.suite}, ${auth.profile.address.city},${auth.profile.address.zipcode}`}</Text>
        </View>
        <View style={styles.containerData}>
          <Text type="regular" style={styles.dataLeft}>
            Company
          </Text>
          <Text
            type="bold"
            style={
              styles.dataRight
            }>{`${auth.profile.company.name}, ${auth.profile.company.catchPhrase}, ${auth.profile.company.bs}`}</Text>
        </View>

        <Button
          onPress={logout}
          style={styles.buttonSignout}
          type="danger"
          title="Sign out"
        />
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Card />
      <Biodata />
    </View>
  );
}

const MemoizedComponent = React.memo(App);

const HomeScreen = CustomView(MemoizedComponent, {
  withHeader: false,
});

export default HomeScreen;
