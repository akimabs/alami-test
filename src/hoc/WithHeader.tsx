import React from 'react';
import {View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

import {Header} from '../components/index';
import {colors} from '../themes/';

type PropsHoc = {
  title: string;
  backAction?: boolean;
};

const WithHoc = (
  WrappedComponent: React.FunctionComponent,
  {title, backAction = true}: PropsHoc,
) => {
  return (props: any) => (
    <View style={styles.container}>
      <Header backAction={backAction} title={title} titleColor="white" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <WrappedComponent {...props} />
    </View>
  );
};

export {WithHoc};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
