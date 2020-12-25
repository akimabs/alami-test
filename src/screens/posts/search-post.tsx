import {useFocusEffect} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {FlatList, Image, StatusBar, View} from 'react-native';
import {Button, Text, TextInput} from '../../components';
import {CustomView} from '../../hoc/CustomView';
import {colors} from '../../themes';

import styles from './styles';

function App({route, navigation}: any) {
  const {data} = route.params;
  useFocusEffect(() => StatusBar.setBarStyle('light-content'));

  const ListPosts = React.memo(() => {
    const navigatePost = (Post: number) => {
      navigation.navigate('Posts', {data: Post});
    };

    return (
      <View style={styles.container}>
        <Formik
          initialValues={{
            query: '',
          }}
          onSubmit={() => {}}>
          {({values, handleChange}: any) => (
            <>
              <View style={styles.containerSearch}>
                <TextInput
                  handle={handleChange('query')}
                  values={values.query}
                  autoFocus
                  placeholder="Search some post"
                />
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <View style={styles.listHeader} />}
                scrollEventThrottle={16}
                style={styles.listContainer}
                data={
                  !values.query
                    ? data
                    : data.filter(
                        (post) =>
                          post.title.search(
                            new RegExp(`${values.query.trim()}`, 'i'),
                          ) >= 0 ||
                          post.body.search(
                            new RegExp(`${values.query.trim()}`, 'i'),
                          ) >= 0,
                      )
                }
                keyExtractor={(item: any) => item.id}
                renderItem={({item}: any) => (
                  <Button
                    style={styles.postSearch}
                    onPress={() => navigatePost(item)}
                    rippleColor={colors.warning + 20}>
                    <View style={[styles.containerImage, styles.circleSearch]}>
                      <Image
                        style={styles.imageProfile}
                        source={{uri: item.profile_photo}}
                      />
                    </View>
                    <View
                      style={[
                        styles.bodyContainer,
                        styles.bodyContainerSearch,
                      ]}>
                      <Text
                        type="semibold"
                        numberOfLines={2}
                        ellipsizeMode="tail">{`${item.title}`}</Text>
                      <Text
                        type="regular"
                        numberOfLines={2}
                        ellipsizeMode="tail">{`${item.body}`}</Text>
                    </View>
                  </Button>
                )}
              />
            </>
          )}
        </Formik>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ListPosts />
    </View>
  );
}

const MemoizedComponent = React.memo(App);

const HomeScreen = CustomView(MemoizedComponent, {
  withHeader: true,
  title: 'Search Post',
});

export default HomeScreen;
