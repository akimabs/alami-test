import React from 'react';
import {
  Image,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {showErrorToast, Text} from '../../components';
import {CustomView} from '../../hoc/CustomView';

import styles from './styles';
import {errorMessage} from '../../utils';
import {api} from '../../../env';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../themes';

function App({route}: any) {
  const [dataComment, setData]: any = React.useState([]);

  useFocusEffect(() => StatusBar.setBarStyle('light-content'));

  const {data} = route.params;

  const getPosts = React.useCallback(async () => {
    const request: any = await api.get(`posts/${data.id}/comments`);
    try {
      if (errorMessage.includes(request.problem)) {
        showErrorToast('Cannot fetch data, something error');
      } else if (request.data.status !== 'error') {
        const tempArray: object[] = [];
        request.data.map((res: any, index: number) => {
          tempArray.push({
            ...res,
            profile_photo: `https://avatars2.githubusercontent.com/u/${index}?s=360`,
          });
        });
        setData(tempArray);
      } else {
        showErrorToast('Cannot fetch data, something error');
      }
    } catch (err) {
      showErrorToast('Cannot fetch data, something error');
    } finally {
    }
  }, [data.id]);

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  const Post = React.memo(() => (
    <View style={styles.postLoading}>
      <View style={styles.containerImage}>
        <Image style={styles.imageProfile} source={{uri: data.profile_photo}} />
      </View>
      <View style={styles.bodyContainer}>
        <Text type="semibold" style={styles.texttitle}>{`${data.title}`}</Text>
        <Text type="regular" style={styles.textSubtitle}>{`${data.body}`}</Text>
      </View>
    </View>
  ));

  const Comment = React.memo(() => (
    <View style={styles.container}>
      <Text type="semibold" style={styles.textComment}>
        Comments
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.listContainer}
        data={dataComment}
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
          <View style={[styles.postLoading, styles.postComment]}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageProfile}
                source={{uri: item.profile_photo}}
              />
            </View>
            <View style={styles.bodyContainer}>
              <Text type="semibold">{`${item.name}`}</Text>
              <Text
                type="thin"
                style={styles.texttitle}>{`${item.email}`}</Text>
              <Text
                type="regular"
                style={styles.textSubtitle}>{`${item.body}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  ));

  return (
    <View style={styles.container}>
      <Post />
      <Comment />
    </View>
  );
}

const MemoizedComponent = React.memo(App);

const HomeScreen = CustomView(MemoizedComponent, {
  withHeader: true,
  title: 'Posts',
});

export default HomeScreen;
