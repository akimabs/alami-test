import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Animated,
  StatusBar,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {api} from '../../../env';

import {Button, showErrorToast, Text} from '../../components';
import {CustomView} from '../../hoc/CustomView';
import {colors} from '../../themes';
import {errorMessage} from '../../utils';

import styles from './styles';

function App({navigation}: any) {
  const auth = useSelector((state: any) => state.auth),
    {name, profile_photo, id} = auth.profile,
    [data, setData]: any = React.useState([]);

  useFocusEffect(() => StatusBar.setBarStyle('dark-content'));

  const getPosts = React.useCallback(async () => {
    const request: any = await api.get('posts');
    try {
      if (errorMessage.includes(request.problem)) {
        showErrorToast('Cannot fetch data, something error');
      } else if (request.data.status !== 'error') {
        const tempArray: object[] = [];
        request.data.map((res: any, index: number) => {
          if (res.userId === id) {
            tempArray.push({
              ...res,
              profile_photo: `https://avatars2.githubusercontent.com/u/${index}?s=360`,
            });
          }
        });
        setData(tempArray);
      } else {
        showErrorToast('Cannot fetch data, something error');
      }
    } catch (err) {
      showErrorToast('Cannot fetch data, something error');
    } finally {
    }
  }, [id]);

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, 70);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 70],
    outputRange: [0, -70],
  });

  const Header = React.memo(() => {
    const navigateAccount = () => {
      navigation.navigate('Account');
    };

    const navigateSearch = () => {
      if (data.length > 1) {
        navigation.navigate('SearchPost', {data});
      }
    };

    return (
      <View>
        <View style={styles.headerContainer}>
          <View>
            <Text type="regular">Wellcome, </Text>
            <Text type="bold" size={12}>{`${name}`}</Text>
          </View>
          <Button onPress={navigateAccount}>
            <Image style={styles.imageProfile} source={{uri: profile_photo}} />
          </Button>
        </View>
        <View style={styles.dashed}>
          <View style={styles.dashed2} />
        </View>
        <Animated.View
          style={[
            styles.animateHeader,
            {
              transform: [{translateY}],
            },
          ]}>
          <Button
            onPress={navigateSearch}
            withOutAnimate
            rippleColor={colors.gray2 + 60}
            type="light"
            style={styles.buttonSearch}>
            <Text type="regular" style={styles.textSearch}>
              Search some post
            </Text>
          </Button>
        </Animated.View>
      </View>
    );
  });

  const ListPosts = React.memo(() => {
    const navigatePost = (Post: number) => {
      navigation.navigate('Posts', {data: Post});
    };

    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => <View style={styles.listHeader} />}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={styles.listContainer}
          data={data}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          ListEmptyComponent={() => (
            <View>
              {['', '', ''].map(() => (
                <View style={styles.postLoading} />
              ))}
              <ActivityIndicator
                color={colors.gray2}
                size={heightPercentageToDP(5)}
              />
            </View>
          )}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}: any) => (
            <Button
              style={styles.postLoading}
              onPress={() => navigatePost(item)}
              rippleColor={colors.warning + 20}>
              <View style={styles.containerImage}>
                <Image
                  style={styles.imageProfile}
                  source={{uri: item.profile_photo}}
                />
              </View>
              <View style={styles.bodyContainer}>
                <Text type="semibold">{`${item.title}`}</Text>
                <Text
                  type="regular"
                  numberOfLines={2}
                  ellipsizeMode="tail">{`${item.body}`}</Text>
              </View>
            </Button>
          )}
        />
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Header />
      <ListPosts />
    </View>
  );
}

const MemoizedComponent = React.memo(App);

const HomeScreen = CustomView(MemoizedComponent, {withHeader: false});

export default HomeScreen;
